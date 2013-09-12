.. currentmodule:: dom

attr
=================================

组件
-----------------------------------------------

  :mod:`dom <dom>`

方法
-----------------------------------------------

.. function:: attr

    | String **attr** ( selector, name )
    | 获取符合选择器的第一个元素的属性值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 属性名称 , 必须是以“data-”开头的字符串
    :returns: 对应属性名的属性值

    例如

    .. code-block:: javascript

       <input type='checkbox' data-checked='checked'/>

       var S = KISSY, DOM = S.DOM;
       DOM.attr("input","data-checked") // => "checked"


    | void **attr** ( selector, name, value )
    | 给符合选择器的所有元素设置属性值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 属性名称 , 必须是以“data-”开头的字符串
    :param value: 属性值


    例如

    .. code-block:: javascript

        <img>

        var S = KISSY, DOM = S.DOM;

        DOM.attr('img', 'data-height',400);
        console.log(DOM.attr('img', 'data-height'));