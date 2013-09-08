.. currentmodule:: node


height
========================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.height

    | Number **height** ()
    | 得到当前节点列表第一个节点的计算高度
        
    :rtype: number
    
     ``css('height')`` 和 ``height()`` 的区别在于 ``height()`` 返回不带单位的纯数值,
     而 ``css('height')`` 则返回带单位的原始值(例如 ``40%`` ).
    当需要数值计算时, 推荐该方法, 如图所示：(from jquery)

    .. raw:: html

        <img  src='http://docs.kissyui.com/source/raw/api/core/node/height.png' />
    

        该方法也可以用来得到 windw 和 document 的高度

    .. code-block:: javascript


          KISSY.all(window).height(); // 得到浏览器可以区域的高度, 相当于 DOM.viewportHeight()
          KISSY.all(document).height(); //得到 html 文档的高度, 相当于 DOM.docHeight()




    | NodeList **height** ( value )
    | 设置当前列表每个元素的 css height 值.

    :param number|string value: 代表像素的整数值, 或数字加上其他单位的字符串值.

    .. note::

        在现代浏览器中, css height 属性不包括 padding , border 或者 margin.




