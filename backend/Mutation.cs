using Microsoft.EntityFrameworkCore;
using HotChocolate;

namespace TodoApi;

public class Mutation
{
    public async Task<TaskItem> CreateTask(CreateTaskInput input, [Service] IDbContextFactory<TodoContext> dbFactory)
    {
        await using var db = await dbFactory.CreateDbContextAsync();
        var task = new TaskItem { Title = input.Title, IsCompleted = false };
        db.Tasks.Add(task);
        await db.SaveChangesAsync();
        return task;
    }
}

public record CreateTaskInput(string Title);
