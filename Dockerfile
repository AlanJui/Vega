FROM microsoft/aspnetcore:1.1
WORKDIR /app

COPY ./out .
ENV PORT=80
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Vega.dll



