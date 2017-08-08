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
