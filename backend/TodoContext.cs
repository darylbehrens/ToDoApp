using Microsoft.EntityFrameworkCore;

namespace TodoApi;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }

    public DbSet<TaskItem> Tasks => Set<TaskItem>();
}

public class TaskItem
{
    [ID]
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
}
