using HotChocolate;
using HotChocolate.Data;

namespace TodoApi;

public class Query
{
[UseFiltering]
[UseSorting]
public IQueryable<TaskItem> GetTasks([ScopedService] TodoContext context) =>
    context.Tasks;

}
