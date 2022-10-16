@import "./icon-font.wxss";
page {
  --bg: pink;
  background: var(--bg);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  --active: orange;
  --bgcolor: rgb(190, 127, 67);
}
/* 圆形菜单 */
.container {
  width: 400rpx;
  height: 400rpx;
  position: relative;
}
.menu-box {
  width: 400rpx;
  height: 400rpx;
  position: relative;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
  transition: all 0.5s;
}

.menu-box.active {
  transform: scale(1);
  opacity: 1;
  visibility: visible;
}
.icon {
  font-size: 56rpx;
  transition: all 0.5s;
}
/* 点我吧 */
.menu-add-box {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  position: absolute;
  top: calc(50% - 60rpx);
  left: calc(50% - 60rpx);
  background: var(--bg);
}
.menu-add-box::after {
  content: '^点我吧^';
  position: absolute;
  bottom: -20rpx;
  font-size: 22rpx;
  color: #222;
  font-weight: bold;
  font-style: italic;
  transition: all .5s;
  opacity: 1;
}
.menu-add-box.active::after {
  font-size: 0rpx;
  opacity: 0;
}
.menu-add-box icon {
  transform: scale(1.5);
}
.menu-add-box.active icon {
  transform: rotate(135deg);
}
/* 每一项菜单 */
.menu-box-item {
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(50% - 40rpx);
  left: calc(50% - 40rpx);
  transition: all 0.5s;
  transform: rotate(calc(var(--deg) * var(--n))) translateX(-140rpx);
}
.menu-box-item icon {
  transform: rotate(calc(var(--deg) * var(--n)));
  transition: all 0.5s;
}
.menu-box-item.active {
  transform: rotate(calc(var(--deg) * var(--n))) translateX(-200rpx);
}
.menu-box-item.active icon {
  animation: scale 1s ease-in-out;
}
@keyframes scale {
  100% {
    transform: scale(1.9);
  }
}
/* 选中的背景框 */
.menu-box-active {
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  background: var(--active);
  box-shadow: 0 0 0 10rpx var(--bg);
  border-radius: 50%;
  pointer-events: none;
  transition: all 0.5s;
  transform-origin: center;
  top: calc(50% - 50rpx);
  left: calc(50% - 50rpx);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
}
.menu-box-item.active~.menu-box-active {
  transform: rotate(calc(var(--deg) * var(--n))) translateX(-200rpx);
  opacity: 1;
  visibility: visible;
}
/*filter（滤镜）修饰父元素背景，影响子元素问题解决 */
.menu-box::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--bgcolor);
  border-radius: 50%;
  filter: drop-shadow(0px 0px 8px var(--active));
  -webkit-filter: drop-shadow(0px 0px 8px var(--active));
}

作者：苏苏就是小苏苏呀
链接：https://juejin.cn/post/7147868466081447944
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。