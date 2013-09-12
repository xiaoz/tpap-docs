.. currentmodule:: dom

hasAttr
=================================




组件
-----------------------------------------------

  :mod:`dom <dom>`

方法
-----------------------------------------------

.. function:: hasAttr

    | Boolean **hasAttr** ( selector , attrName )
    | 判断符合选择器的所有元素中是否有某个元素含有特定属性.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string attrname: 属性名称
    :returns: 符合选择器的所有元素中是否有某个元素含有特定属性.
    :rtype: Boolean
    

    例如

    .. code-block:: javascript

        var DOM = KISSY.DOM;
		// 如果有 lazyloadimg 样式的元素包含 alt 属性则向下进行
		if(DOM.hasAttr(".lazyloadimg","alt")){
			//add your option
		}
