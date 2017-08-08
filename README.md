# ASP.NET Core SPA 應用系統練習

研習 ASP.NET Core SPA 應用系統框架。

App前端：
  Web 用戶端，採 Angular 實作。

App後端：
  資料提供以 RESTful API Service 為通信標準，採用 ASP.NET Core Web API 實作。

 ## 專案使用操作

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

