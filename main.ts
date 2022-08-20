import init from './src/index';
import { NswagOptions } from './src/types';
(async () => {
  await init([{
    SwaggerUrl: 'http://127.0.0.1:8088/api-json', // 接口文档地址（必填）
    ApiBase: 'http://127.0.0.1:8088/', // 接口根节点（必填）
    OutPath: './apiCenter',
    // TplPath: '', // 可以把源码里面的ejs文件复制出来自定义，然后把自定义的模板地址赋值给这个属性
    UseAxios: true, // 默认false，不直接使用axios，而是使用简单封装过拦截器的axios；如果true，则使用axios，那么拦截器需要重写
  } as NswagOptions])
})();