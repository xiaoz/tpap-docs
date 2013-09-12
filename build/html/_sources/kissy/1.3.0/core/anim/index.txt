.. module:: anim

anim
===============================================


.. hint::

    组件来源于 `这里 <http://docs.kissyui.com/docs/html/api/core/anim/index.html>`_


.. important::
    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core" />

构造函数
-----------------------------------------------

  * :class:`Anim`

  
方法
-----------------------------------------------

  * :meth:`~Anim.prototype.isRunning`
  * :meth:`~Anim.prototype.isPaused`
  * :meth:`~Anim.prototype.run`
  * :meth:`~Anim.prototype.stop`
  * :meth:`~Anim.prototype.pause`
  * :meth:`~Anim.prototype.resume`



构造函数详情
-----------------------------------------------

.. class:: Anim
    
    | **Anim** (elem, props[, duration, easing, completeFn])
    | 得到绑定于某个 dom 节点的动画实例

    :param String|HTMLElement|KISSY.Node|window elem: 作用动画的元素节点或窗口（窗口时仅支持 scrollTop/Left）.
    :param Object props: 动画结束的 dom 样式值, 例如
    
        .. code-block:: javascript

            {
                width:"100px",
                height:"100px"
            }
        
        表示节点将从当前宽高经过动画平滑变化到宽 100px 与高 100px.
        

            也可以设置 scrollLeft 或者 scrollTop, 这时会直接对元素的滚动属性产生动画.
        
    :param Number duration: 默认为 1 , 动画持续时间, 以秒为单元.
    :param String easing: 默认为 'easeNone' , 动画平滑函数, 可取值 "easeNone","easeIn","easeOut","easeBoth","easeInStrong", "easeOutStrong","easeBothStrong","elasticIn","elasticOut", "elasticBoth","backIn","backOut","backBoth", "bounceIn","bounceOut","bounceBoth".
    :param function completeFn: 动画到最后一帧后的回调函数.
    
    
    | **Anim** (elem, props[, config])
    | 得到绑定于某个 dom 节点的动画实例

    :param String|HTMLElement|KISSY.Node|window elem: 作用动画的元素节点.
    :param Object props: 动画结束的 dom 样式值
    :param Number config: 动画配置项，包含:
    
            .. attribute:: config.duration
            
                单位秒。默认 1 秒.动画持续时间
                
            .. attribute:: config.easing
            
               string|function。默认 'easeNone'. 动画平滑函数
                
            .. attribute:: config.queue
            
                String|false|undefined。所属队列名称. 默认undefined. 属于系统内置队列, 设置 false 则表示该动画不排队立即执行. 
                
            .. attribute:: config.complete
            
                function。 动画到最后一帧后的回调函数.

方法详情
-----------------------------------------------

.. method:: Anim.prototype.isRunning

    | **isRunning** ()
    | 判断当前动画对象是否在执行动画过程.

    :rtype: Boolean



.. method:: Anim.prototype.isPaused

    | **isPaused** ()
    | 判断当前动画对象是否被暂停.

    :rtype: Boolean


.. method:: Anim.prototype.run

    | **run** ()
    | 在动画实例上调用, 开始当前动画实例的动画.

.. method:: Anim.prototype.stop

    | **stop** ([finish=false])
    | 在动画实例上调用, 结束当前动画实例的动画.
    
    :param Boolean finish: false 时, 动画会在当前帧直接停止（不触发 complete 回调）.
     为 true 时, 动画停止时会立刻跳到最后一帧（触发 complete 回调）



.. method:: Anim.prototype.pause

    | **pause** ()
    | 在动画实例上调用, 暂停当前动画实例的动画.



.. method:: Anim.prototype.resume

    | **resume** ()
    | 在动画实例上调用, 继续当前动画实例的动画.





demo 代码样例
-----------------------------------------------


    **基本的Anim以及方法的示例**

    .. raw:: html

        <iframe width="100%" height="70"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/1.3.0/core/anim/anim.php"></iframe>

     **对应DEMO html/php的代码**

        .. literalinclude:: /raw/tpap/kissy/1.3.0/core/anim/anim.php
           :language: html

     **对应DEMO javascript的代码**

        .. literalinclude:: /raw/tpap/kissy/1.3.0/core/anim/anim.js
           :language: javascript