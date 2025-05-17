# --- Build Stage ---
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy everything and publish to an explicit output folder
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /out

# --- Runtime Stage ---
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy the published app
COPY --from=build /out .

# DEBUG: Show contents of /app
RUN ls -la /app

# ✅ Match this to your actual .csproj file name!
ENTRYPOINT ["dotnet", "TodoApi.dll"]
