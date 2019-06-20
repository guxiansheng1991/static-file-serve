# static-file-serve
静态文本服务,使用node + express搭建

需要存在的功能如下:
1. 单个文件的访问
2. 文件访问应该考虑缓存的优化, 最好还能兼顾性能
3. 文件的单个上传和多个上传
4. 项目部署应该规避操作系统的差异
5. 容灾,错误重启服务
6. 应该具有扩展性,当手动新建文件夹的时候,系统能够识别到新加的内容
7. 尽量做到能够将讲台文件映射到其他非项目路径
8. 项目应该是可配置的
9. 项目应该有用户系统,登陆后才能够操作