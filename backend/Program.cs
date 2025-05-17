using Microsoft.EntityFrameworkCore;
using TodoApi;

var builder = WebApplication.CreateBuilder(args);

// 🛠 Bind to Docker-exposed port
builder.WebHost.UseUrls("http://0.0.0.0:5000");

// ✅ EF Core: Register the pooled context factory
builder.Services.AddPooledDbContextFactory<TodoContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// ✅ GraphQL setup (Relay + Hot Chocolate + pooled context support)
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddFiltering()
    .AddSorting()
    .AddProjections()
    .ModifyRequestOptions(opt => opt.IncludeExceptionDetails = true)
    .RegisterDbContext<TodoContext>(DbContextKind.Pooled); // ⬅️ 🔥 This is the fix

// ✅ Console logging
builder.Services.AddLogging(logging =>
{
    logging.AddConsole();
    logging.SetMinimumLevel(LogLevel.Debug);
});

var app = builder.Build();

// ✅ Run database migrations at startup
using (var scope = app.Services.CreateScope())
{
    var dbFactory = scope.ServiceProvider.GetRequiredService<IDbContextFactory<TodoContext>>();
    using var db = dbFactory.CreateDbContext();
    db.Database.Migrate();

        // ✅ Seed one quick task if none exist
    if (!db.Tasks.Any())
    {
        db.Tasks.Add(new TaskItem
        {
            Title = "Take a break — you earned it 🏖️",
            IsCompleted = false
        });
        db.SaveChanges();
    }
}

// ✅ Developer-friendly errors
app.UseDeveloperExceptionPage();

// ✅ Enable /graphql endpoint
app.MapGraphQL();

Console.WriteLine("🚀 ASP.NET backend is running on port 5000");

app.Run();
