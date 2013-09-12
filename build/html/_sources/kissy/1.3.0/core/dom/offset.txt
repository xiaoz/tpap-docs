.. currentmodule:: dom

offset
=================================

组件
-----------------------------------------------

  :mod:`dom <dom>`

方法
-----------------------------------------------

.. function:: offset

    | Object **offset** ( selector )
    | 获取符合选择器的第一个元素相对页面文档左上角的偏移值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :returns: 相对页面文档左上角的偏移值, 包括两个属性
    :rtype: Object

        .. attribute:: left

                {Number} - 相对页面文档左上角的横坐标
                
        .. attribute:: top

                {Number} - 相对页面文档左上角的纵坐标
    

    | void **offset** ( selector, value )
    | 给符合选择器的所有元素设置偏移值.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param object value: 偏移对象, 包括两个属性 ``left`` , ``top`` , 格式同获取偏移的返回值.


demo 代码样例
-----------------------------------------------


    **基本的Anim以及方法的示例**

    .. raw:: html

        <iframe width="100%" height="70"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/1.3.0/core/dom/offset.php"></iframe>

     **对应DEMO html/php的代码**

        .. literalinclude:: /raw/tpap/kissy/1.3.0/core/dom/offset.php
           :language: html

     **对应DEMO javascript的代码**

        .. literalinclude:: /raw/tpap/kissy/1.3.0/core/dom/offset.js
           :language: javascript






    
