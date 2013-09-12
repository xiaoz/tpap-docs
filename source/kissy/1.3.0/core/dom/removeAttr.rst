.. currentmodule:: dom

removeAttr
=================================

组件
-----------------------------------------------

  :mod:`dom <dom>`


方法
-----------------------------------------------

.. function:: removeAttr

    | void **removeAttr** ( selector, name )
    | 移除符合选择器的所有元素的指定属性.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string name: 属性名称 , 必须是以“data-”开头的字符串
	
    例如

    .. code-block:: javascript

        <input type="radio" data-checked="checked">

        var DOM = KISSY.DOM;
		// 将所有复选框的 checked 属性移除
		DOM.removeAttr("input","data-checked");
		DOM.hasAttr("input","data-checked");  //false
