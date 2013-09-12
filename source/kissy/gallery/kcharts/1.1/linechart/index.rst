.. module:: linechart


LineChart
===============================================

|  ``折线图``

.. hint::

    组件来源于 `这里 <http://gallery.kissyui.com/kcharts/1.1/guide/linechart.html?spm=0.0.0.0.DIe2mq>`_


.. important::

    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,kissy/gallery/kcharts/1.1/index" />


构造函数
-----------------------------------------------

  * :class:`LineChart`

参数配置
-----------------------------------------------

  * :data:`renderTo`
  * :data:`autoRender`
  * :data:`canvasAttr`
  * :data:`lineType`
  * :data:`themeCls`
  * :data:`colors`
  * :data:`title`
  * :data:`subTitle`
  * :data:`points`
  * :data:`xAxis`
  * :data:`yAxis`
  * :data:`xGrids`
  * :data:`yGrids`
  * :data:`xLabels`
  * :data:`yLabels`
  * :data:`series`
  * :data:`comparable`
  * :data:`tip`
  * :data:`anim`
  * :data:`legend`


实例方法
-----------------------------------------------

  * :meth:`render`
  * :meth:`clear`
  * :meth:`showLine`
  * :meth:`hideLine`
  * :meth:`on`

事件
-----------------------------------------------

  * :func:`afterRender`
  * :func:`paperLeave`
  * :func:`stockChange`


构造函数详情
-----------------------------------------------

.. class:: LineChart

    | **KISSY.KCharts.LineChart** (config)

    :param Object config: 配置项, 详细见下方 **参数配置详情** .

参数配置详情
-----------------------------------------------

.. data:: renderTo

    {selector|HTMLElement } -  容器 注:容器必须要有width和height的绝对值

.. data:: autoRender

    { Array } 是否自动渲染 如果为手动 则需要调用 render()方法

.. data:: canvasAttr

    {Object} 设置图形区域位于容器的位置以及尺寸

        * x { number } 水平距离
        * y { number } 垂直距离
        * width { number } 宽度
        * height { number } 高度

.. data:: lineType

    {Object} 设置图形区域位于容器的位置以及尺寸

.. data:: themeCls

    { string } 主题className 默认："ks-chart-default"


.. data:: colors

    { array } 手动配置线的颜色 （可选）

        如 [{"DEFAULT":"#fff","HOVER":"#ccc"},{"DEFAULT":"#fff","HOVER":"#ccc"}] - DEFAULT { string } 默认颜色 - HOVER { string } hover颜色


.. data:: subTitle

    {Object} 副标题 同 title

.. data:: points

    {object} 点的配置

       * attr { object } 默认样式
            * stroke { string } 笔触颜色 如:"#ccc"
            * r { number } 圆点半径
            * fill { string } 填充色
            * stroke-width { number } 笔触宽度
            * type { string } 点的类型 默认是 “circle” 圆形，其余有 "auto","triangle","rhomb","square" 供选择
       * hoverAttr { object } hover样式 同attr

.. data:: xAxis

    {Object} x 轴配置

        * isShow { boolean } 是否渲染显示
        * css { object } css样式

.. data:: yAxis

    {Object} y轴配置

.. data:: xGrids

    {object} 横向网格配置

        * isShow { boolean } 是否渲染显示
        * css { object } css样式

.. data:: yGrids

    {object} 纵向网格配置

        * isShow { boolean } 是否渲染显示
        * css { object } css样式

.. data:: xLabels

    {object} x轴刻度文本

        * isShow { boolean } 是否渲染显示
        * css { object } css样式
        * template { number} 输出的html文本

.. data:: yLabels

    {object} y轴刻度文本 同 xLabels

.. data:: series

    {array} 数据

    推荐

    .. code-block:: json

        series:[{
            text: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            text: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }
            , {
                text: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                text: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }
        ]


.. data:: defineKey

    {object} 针对数据 data 对应的key定义

.. data:: tip

    {object} 数据提示层配置

        * template { string } 文本或者是模板 详见KISSY.Template
        * css { object } css样式 注:"{COLOR}" 默认选择线的颜色，如{"border-color":"{COLOR}"}
        * anim { object } 动画配置 "easing" 和 "duration" 如 {easing:"easeOut",duration:0.3}
        * offset { object } tip的偏移量 "x" 和 "y" 如 {x:100,y:40}
        * boundryDetect { boolean } 是否进行边缘检测
        * alignX { string } 水平对齐方式 有"left" "center" "right"三种 默认 "left"
        * alignY { string } 水平对齐方式 有"top" "middle" "bottom"三种 默认 "top"

.. data:: legend

    {object} 图例配置

        * isShow { boolean } 是否渲染显示
        * css { object } css样式
        * x { number } 水平偏移量
        * y { number } 垂直偏移量
        * layout {string} 垂直或水平展示 可选："horizontal" 水平 "vertical" 垂直
        * align {string} 水平对齐方式 可选："left" 左对齐 "center" 居中 "right" 右对齐
        * verticalAlign {string} 垂直对齐方式 可选："top" 顶部对齐 "middle" 垂直居中 "bottom" 底部


方法详情
-----------------------------------------------

.. method:: render

    | **render** ()
    | 渲染图表

.. method:: clear

    | **clear** ()
    | 清除画布上的所有内容

    :param Object config: 配置项, 详细见上方 **Configs Detail**

.. method:: showLine

    | **showLine** (lineIndex)
    | 展示直线

.. method:: hideLine

    | **hideLine** (lineIndex)
    | 隐藏直线

.. method:: on

    | **on** (type, fnc)
    | 事件注册

    :param String type: 事件类型, 参考事件详情
    :param Function fnc: 回调函数



事件详情
-----------------------------------------------

.. function:: afterRender

    | **afterRender**
    | 渲染完毕后

.. function:: paperLeave

    | **paperLeave**
    | 离开画布 (可以用来触发隐藏tip等动作)

.. function:: barChange

    | **barChange**
    | 柱之间的切换 (可以用来触发tip的移动和数据渲染)


demo 代码样例
-----------------------------------------------


    **KCharts组件linechart,barchart,piechart DEMO**

    .. raw:: html

        <iframe width="100%" height="800"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/gallery/kcharts/1.1/kcharts.php"></iframe>

    **对应DEMO html/php的代码**

    .. literalinclude:: /raw/tpap/kissy/gallery/kcharts/1.1/kcharts.php
        :language: html

    **对应DEMO javascript的代码**

    .. literalinclude:: /raw/tpap/kissy/gallery/kcharts/1.1/kcharts.js
        :language: javascript




