# ASP.NET Core SPA 應用系統練習

研習 ASP.NET Core SPA 應用系統框架。

App前端：
  Web 用戶端，採 Angular 實作。

App後端：
  資料提供以 RESTful API Service 為通信標準，採用 ASP.NET Core Web API 實作。

 ## 軟體建置及啟動之操作程序

(1) 下載程式碼

```
git clone git@github.com:AlanJui/Vega.git
```

(2) 進入專案程式碼檔案目錄

```
cd Vega
```

(3) 安裝前端所需的程式庫

```
npm install
```

(4) 設定 WebPack 環境

```
webpack --config webpack.config.vendor.js
```

(5) 製作前端（Web Client）的 Main Bundle

```
webpack
```

(6) 安裝後端所需的程式庫

```
dotnet restore
```

(7) 建置（Build）應用系統

```
dotnet build
```

(8) 建置資料庫

```
dotnet ef database update
```

(9) 啟動應用系統

```
dotnet run
```

## 軟體開發操作

### 建立 Angular 軟體元件

原本 Angular CLI 所提供的指令 `ng g component [軟體元件]`，可執行自動建立軟體元件作業。但此功能需要搭配 .angular-cli.json 檔案的設定；以及前端主程式 app.module.ts 檔案的配合。

但因 ASP.NET Core SPA 目前的作法，將 app.moudle.ts 檔案切分成三個各自獨立的檔案： app.module.client.ts 、app.module.server.ts、app.module.shared.ts ；以致原先的指令已無法正常運作，須變更成如下的作法：

```
ng g component [軟體元件] --module ../app.module.shared.ts
```

## 建置 Local 端 Docker Image

(1) 為 ASP.NET Core Web App 安裝所需之套件
```
$ dotnet restore
```

(2) ASP.NET Core Web App 「發行作業」（為 Docker Build 做準備）
```
$ dotnet publish -o out
```

(3) 建置 Docker Image
```
$ docker build -f Dockerfile.local -t alanjui/asp-net-core-spa .
```

(4) 執行 Docker Container
```
$ docker run --name vega --rm -p 8000:80 alanjui/asp-net-core-web
```

(5) 使用 Web 瀏覽器，瀏覽網址： http://localhost:8000


------

## 佈署到 Heroku

令 <herokuApp> = my-vega

(1) 登入 Heroku Container
```
$ heroku container:login
```

(2) 建立 Heroku App
```
$ heroku create <HerokuApp>
```

(3) ASP.NET Core Web App 「發行作業」
```
$ dotnet publish -c Release -o out
```

(4) 佈署到 Heroku 平台
```
$ heroku container:push web
```

(5) 執行 Heroku App
```
$ heroku open -a <HerokuApp>
```

Web URL: https://my-vega.herokuapp.com/

Heroku Management Site: https://dashboard.heroku.com/apps/my-vega

【Heroku參考】： https://ccc-asp-net-core-app.herokuapp.com/

【參考文件】： https://devcenter.heroku.com/articles/container-registry-and-runtime