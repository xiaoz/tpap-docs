.. module:: AliMap


AliMap
===============================================

|  阿里云地图初始化对象

.. hint::

    组件来源于 `这里 <http://ditu.aliyun.com/jsdoc/map/classes/AliMap.html>`_


.. important::
    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,alimap/1.0/index" />


构造函数
-----------------------------------------------

  * :class:`AliMap`

参数配置
-----------------------------------------------

  * :data:`container`


实例方法
-----------------------------------------------

  * :meth:`centerAndZoom`
  * :meth:`addOverlay`
  * :meth:`openInfoWindow`
  * :meth:`closeInfoWindow`
  * :meth:`checkResize`
  * :meth:`clearOverlays`
  * :meth:`depose`
  * :meth:`disableDragging`
  * :meth:`draggingEnabled`
  * :meth:`enableDragging`
  * :meth:`endAutoSlide`
  * :meth:`getZoom`
  * :meth:`isDragging`
  * :meth:`removeOverlay`
  * :meth:`setZoom`
  * :meth:`startAutoSlide`
  * :meth:`zoomIn`
  * :meth:`zoomOut`
  * :meth:`panTo`


构造函数详情
-----------------------------------------------

.. class:: AliMap

    | **AliMap** (container)

    :param Selector|HTMLDOMNode: 地图容器节点 .

参数配置详情
-----------------------------------------------

.. data:: container

    {Selector/HTMLELement} - 必选, 阿里云地图的初始化容器支持selector，或者是HTMLELement元素



方法详情
-----------------------------------------------

.. method:: centerAndZoom

    | **centerAndZoom** (point, zoom)
    | 设置地图的中心点坐标和缩放级别
    :param AliLatLng point: 中心点坐标 .
    :param Number zoom: 缩放级别 .

.. method:: addOverlay

    | **addOverlay** (overlay)
    | 添加一个标注

    :param Overlay overlay: 需要添加的overlay对象，AliMaker/AliInfoWindow都是overlay对象

.. method:: openInfoWindow

    | **openInfoWindow** (latlng,title,content)
    | 在指定点显示信息浮窗

    :param AliLatLng latlng: 显示信息浮窗的位置
    :param String title: 信息浮窗的标题
    :param String content: 信息浮窗的内容，可以为HTML或HTML元素

.. method:: closeInfoWindow

    | **closeInfoWindow** ()
    | 关闭信息浮窗

.. method:: checkResize

    | **checkResize** ()
    | 在层或者窗口的大小变化时重新设置地图大小

.. method:: clearOverlays

    | **clearOverlays** ()
    | 删除所有的标注

.. method:: depose

    | **depose** ()
    | 删除所有的标注

.. method:: disableDragging

    | **disableDragging** ()
    | 禁用地图的拖拽功能

.. method:: draggingEnabled

    | Boolean **draggingEnabled** ()
    | 判断地图是否已经启用拖拽的功

.. method:: enableDragging

    | **enableDragging** ()
    | 启用地图的拖拽功能

.. method:: endAutoSlide

    | **endAutoSlide** ()
    | 在鼠标移动到地图边界时自动滑动地图

.. method:: getZoom

    | Number **getZoom** ()
    | 返回系统目前的缩放级别

.. method:: isDragging

    | Boolean **isDragging** ()
    | 返回地图是否正处在拖动过程之中

.. method:: removeOverlay

    | **removeOverlay** (overlay)
    | 移除一个标注

    :param Overlay overlay: 需要添加的overlay对象，AliMaker/AliInfoWindow都是overlay对象

.. method:: setZoom

    | **setZoom** (zoom)
    | 设置地图的缩放级别

    :param Number zoom: 缩放级别

.. method:: startAutoSlide

    | **startAutoSlide** (config)
    | 在鼠标移动到地图边界时自动滑动地图

    :param JSON config: 滑动选项
    :param Number config.padding: 边界像素值，鼠标移动到距离边界指定值范围内时，才会开始滑动地图。默认16
    :param Number config.speed: 移动的速度参数。 默认8
    :param Bollean config.speedup: 是否采用速度持续增加的模式，如果为true，则会慢慢加速直到speed指定的速度. 默认false

.. method:: zoomIn

    | **zoomIn** (zoom)
    | 放大一级地图


.. method:: zoomOut

    | **zoomOut** ()
    | 缩小一级地图

.. method:: panTo

    | **panTo** (point)
    | 平滑移动地图到指定的经纬度坐标

    :param AliLatLng point: 目标中心点坐标



demo 代码样例
-----------------------------------------------


    **三个简单的demo例子**

    .. raw:: html

        <iframe width="100%" height="260"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/1.3.0/component/calendar.php"></iframe>

    **对应DEMO html/php的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/calendar.php
    :language: html

    **对应DEMO javascript的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/calendar.js
    :language: javascript



