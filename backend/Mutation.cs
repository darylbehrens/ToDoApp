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

    public async Task<DeleteTaskPayload> DeleteTask(DeleteTaskInput input, [Service] IDbContextFactory<TodoContext> dbFactory)
    {
        await using var db = await dbFactory.CreateDbContextAsync();
        var task = await db.Tasks.FindAsync(input.Id);

        if (task is null)
        {
            throw new GraphQLException("Task not found");
        }

        db.Tasks.Remove(task);
        await db.SaveChangesAsync();

        return new DeleteTaskPayload(task.Id);
    }

    public async Task<TaskItem> UpdateTaskStatus(UpdateTaskInput input, [Service] IDbContextFactory<TodoContext> dbFactory)
    {
        await using var db = await dbFactory.CreateDbContextAsync();
        var task = await db.Tasks.FindAsync(input.Id);

        if (task is null)
        {
            throw new GraphQLException("Task not found");
        }

        task.IsCompleted = input.IsCompleted;
        await db.SaveChangesAsync();

        return task;
    }

}

public record CreateTaskInput(string Title);
public record DeleteTaskInput(int Id);
public record DeleteTaskPayload(int DeletedTaskId);
public record UpdateTaskInput(int Id, bool IsCompleted);

