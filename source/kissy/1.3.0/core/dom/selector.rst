.. currentmodule:: dom

.. _dom-selector:


selector
==================================

KISSY 选择器内置仅支持 #id tag.class 常用形式, 考虑 2/8 原则, 支持以下选择器：
    * #id
    * tag
    * .cls
    * #id tag
    * #id .cls
    * tag.cls
    * #id tag.cls

.. note::

  * tag 可以为 ``*`` 字符
  * 支持 ``,`` 号分组


例如:

.. code-block:: javascript

    var DOM = KISSY.DOM;
    // 获得class 为 J_on 的 a 元素
    var els=DOM.query("a.J_on");

    

