## 前端第三方接入安全 API文档

#### Get Start
- 安装sphinx文档编写工具 (百度或者http://www.atatech.org/article/detail/5260/567)
- git clone git@github.com:lorrylockie/tpap-docs.git & make html


文档采用树形结构

source 为源码目录
source
    kissy
        1.3.0
            calendar
            core
                dom
                node
                ...
        gallery
            kcharts
    alimap
    ...

    raw/tpap 这是demo目录，为一个完整的taegrid应用. 将整个目录放到sdk/apps里面运行。 因为sdk文件必须为gbk编码,而sphinx必须为utf-8编码。所以demo环境中不允许出现中文，否则会乱码

    theme 主题


#### 一些约定

- 组件的例子，可参考calendar组件的格式
- 每个api需要包含以下几方面
    - 一句话描述该api的含义和用途
    - 此api来源(对应的适配源地址)
    - 在tae/sdk 中的引入方式
    - api 详细参数说明
    - 详细的demo案例(raw/tpap 下编写demo并且提交代码)

