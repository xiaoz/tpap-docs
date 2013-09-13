.. module:: xtemplate


XTemplate
===============================================

|  富逻辑的 KISSY 模板引擎

.. hint::

    组件来源于 `这里 <http://docs.kissyui.com/docs/html/api/component/xtemplate/>`_


.. important::
    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,kissy/1.3.0/xtemplate" />


构造函数
-----------------------------------------------

  * :class:`XTemplate`

参数配置
-----------------------------------------------

  * :data:`subTpls`
  * :data:`commands`
  * :data:`name`
  * :data:`cache`


实例方法
-----------------------------------------------

  * :meth:`removeSubTpl`
  * :meth:`addSubTpl`
  * :meth:`addCommand`
  * :meth:`removeCommand`
  * :meth:`compile`
  * :meth:`render`


构造函数详情
-----------------------------------------------

.. class:: XTemplate

    | **XTemplate** (tpl,config)
   
    :param String|Function tpl: 字符串模板或编译过的模板函数.
    :param Object config: 配置项, 详细见下方 **参数配置详情** .

参数配置详情
-----------------------------------------------

.. data:: subTpls

    {Object} - 局部自定义子模板的键值对

.. data:: commands

    {Object} -  局部自定义命令的键值对

.. data:: name

    {Object} -  模版名称，可在 chrome dev tools 中看到以该值为名称的模板文件代码

.. data:: cache

    {Boolean} - 是否缓存生成的模板函数，默认 true.


方法详情
-----------------------------------------------

.. method:: removeSubTpl

    | **removeSubTpl** (subTplName)
    | 删除指定的局部子模板
   
   :param String subTplName: 子模板名称
   
.. method:: addSubTpl

    | **addSubTpl** (subTplName, def)
    | 添加指定的局部子模板， 格式类似 **subTpls**

    :param String subTplName: 子模板名称
    :param String|Function def: 添加子模板定义

.. method:: removeCommand

    | **removeCommand** (commandName)
    | 删除指定的局部命令
    
  :param String subTplName:  命令名称
	
.. method:: addCommand

    | **addCommand** (commandName,fn)
    | 添加局部命令， 格式类似 commands

    :param String commandName:  命令名称
    :param Function fn:  命令定义

.. method:: compile

    | **compile** ()
    | 编译模板
    
    :param String subTplName:  子模板名称
    :param String Returns:  编译过的模板函数
    
.. method:: render

    | **render** (data)
    | 编译模板
    
    :param Object data:   数据对象
    :param String Returns:  数据融合模版后的字符串


demo 代码样例
-----------------------------------------------


    **三个简单的demo例子**

    .. raw:: html

        <iframe width="100%" height="260"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/1.3.0/component/xtemplate.php"></iframe>

    **对应DEMO html/php的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/xtemplate/xtemplate.php
        :language: html

    **对应DEMO javascript的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/xtemplate/xtemplate.js
        :language: javascript



