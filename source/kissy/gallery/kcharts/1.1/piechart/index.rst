.. module:: piechart


PieChart
===============================================

|  ``折线图``

.. hint::

    组件来源于 `这里 <http://gallery.kissyui.com/kcharts/1.1/guide/piechart.html?spm=0.0.0.0.yg5hNc>`_


.. important::

    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,kissy/gallery/kcharts/1.1/index" />


构造函数
-----------------------------------------------

  * :class:`PieChart`

参数配置
-----------------------------------------------

  * :data:`renderTo`
  * :data:`cx`
  * :data:`cy`
  * :data:`R`
  * :data:`r`
  * :data:`colors`
  * :data:`labelIndside`
  * :data:`anim`
  * :data:`tip`
  * :data:`label`


实例方法
-----------------------------------------------

  * :meth:`on`

事件
-----------------------------------------------

  * :func:`mouseenter`
  * :func:`mouseleave`
  * :func:`click`
  * :func:`afterRender`


构造函数详情
-----------------------------------------------

.. class:: PieChart

    | **KISSY.KCharts.PieChart** (config)

    :param Object config: 配置项, 详细见下方 **参数配置详情** .

参数配置详情
-----------------------------------------------

.. data:: renderTo

    {selector|HTMLElement } -  容器 注:容器必须要有width和height的绝对值

.. data:: cx

    饼图中心点x坐标

.. data:: cy

    饼图中心点y坐标

.. data:: R

    半径

.. data:: r

    空心半径，必须小于R


.. data:: data

    数据，每个数据段可以包含一些额外的数据，共tip在渲染模板时调用

.. data:: colors

    扇形的颜色，长度和data对应

.. data:: labelIndside

    label标注在扇形区域内

.. data:: anim

    动画配置 - type { string } 动画类型 可选"r","sector" - easing { string } 动画效果 - duration { number } 动画运行时间


.. data:: tip

    提示, 同linechart的tip

.. data:: label

    设为false，表示不展示label，否则展示

.. data:: labelline

    饼图标注线条的配置 - attr { object } 线条的属性


方法详情
-----------------------------------------------

.. method:: on

    | **on** (type, fnc)
    | 事件注册

    :param String type: 事件类型, 参考事件详情
    :param Function fnc: 回调函数



事件详情
-----------------------------------------------

.. function:: mouseenter

    | **mouseenter**
    | 鼠标进入

.. function:: mouseleave

    | **mouseleave**
    | 鼠标离开

.. function:: click

    | **click**
    | 点击

.. function:: afterRender

    | **afterRender**
    | 渲染结束


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




