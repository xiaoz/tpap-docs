.. module:: node

node
====================================


.. hint::

    组件来源于 `这里 <http://docs.kissyui.com/docs/html/api/core/node/index.html>`_


.. important::
    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core" />

.. note::
    node 包括并扩展了 :mod:`dom <dom>` , :mod:`event` , :mod:`anim` 模块的所有功能, 推荐采用 ``Node`` 模块,
    你只需要把 ``KISSY.all`` 看做 ``jquery`` 中的 ``$`` 就可以了,
    链式操作你会喜欢的！

组件
-----------------------------------------------

  :mod:`node`


构造函数
-------------------------------------
.. toctree::
   :titlesonly:
   
   nodelist.rst


使用方法
-------------------------------------

   var $ = KISSY.all;
   你可以理解就是jquery的jQuery/$ ，你可以像使用jquery一样去使用这个接口了
   关于KISSY.all方法的具体说明详见

.. toctree::
   :titlesonly:
   
   all.rst


成员方法
-----------------------------------------------

.. toctree::
   :titlesonly:
  

   getDOMNodes.rst
   getDOMNode.rst
   end.rst  
   equals.rst
   add.rst
   item.rst
   slice.rst
   scrollTop.rst
   scrollLeft.rst
   height.rst
   width.rst
   appendTo.rst
   prependTo.rst
   insertBefore.rst
   before.rst
   after.rst
   insertAfter.rst
   animate.rst
   stop.rst
   pause.rst
   resume.rst
   isRunning.rst
   isPaused.rst
   show.rst
   hide.rst
   toggle.rst
   fadeIn.rst
   fadeOut.rst
   fadeToggle.rst
   slideDown.rst
   slideUp.rst
   slideToggle.rst
   clone.rst
   empty.rst
   contains.rst
   filter.rst
   first.rst
   last.rst
   next.rst
   prev.rst
   innerHeight.rst
   innerWidth.rst
   outerWidth.rst
   outerHeight.rst
   parent.rst
   remove.rst
   replaceWith.rst
   scrollIntoView.rst
   siblings.rst
   test.rst
   val.rst
   children.rst
   node-index.rst
   
.. note::

        以下的这些方法,

        :func:`~dom.hasClass`, :func:`~dom.addClass`, :func:`~dom.removeClass`,
        :func:`~dom.replaceClass`, :func:`~dom.toggleClass`, :func:`~dom.removeAttr`,
        :func:`~dom.attr`, :func:`~dom.hasAttr`,
        :func:`~dom.text`, :func:`~dom.offset`, :func:`~dom.data`, :func:`~dom.removeData`,
        :func:`~dom.hasData`,
        :func:`~event.on`, :func:`~event.detach`, :func:`~event.fire`, :func:`~event.delegate`,
        的调用都会被转发给 :mod:`dom <dom>` , :mod:`event` , 原 ``DOM`` , ``Event`` 对应方法的第一个参数传入一个原生 DOM 节点数组, 而这个原生 DOM 节点数组则是由当前的 ``KISSY NodeList`` 对象得到的.

        ``Node`` 模块会对返回值进行处理:

            * 如果返回值为单个节点或节点数组, 则包装为 :class:`NodeList`
            * 如果返回值为 ``undefined`` , 则返回调用者 ``NodeList`` 对象
            * 其他, 直接返回


.. note::
    ``Node`` 模块的 ``on`` 方法中, 事件对象的 ``target`` 和 ``relatedTarget`` 指向对应的原生节点.
    为了保持应用兼容，推荐的做法是，在回调函数开始包装 event.target

.. code-block:: html

    <input class="d1" name="test" value="v">
    <input class="d2" name="test" value="111">

    <script>
        KISSY.all("input").on("mouseenter",function(ev){
            ev.target // => d1 或者 d2
            KISSY.all(ev.target).val('值被改变啦');
        });
    </script>
    



