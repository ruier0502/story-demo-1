v 系列箭头

```jsx
<div>
  <IconV direction="left" />
  <IconV direction="right" />
  <IconV direction="top" />
  <IconV direction="bottom" />
</div>
```

2px 线框
```jsx
<div>
  <IconV className="icon-css-v--2" direction="left" />
  <IconV className="icon-css-v--2" direction="right" />
  <IconV className="icon-css-v--2" direction="top" />
  <IconV className="icon-css-v--2" direction="bottom" />
</div>
```

默认的颜色为color的颜色，如需要改变颜色，可传入一个class，再设置该class的color：

```css
.gray9 {
  color: #999;
}
```

同样要控制v箭头的长度，也可以通过自定义class设置after的大小，如：
```css
.icon-v-width-16::after {
  width: 16px;
  height: 16px;
}
```
