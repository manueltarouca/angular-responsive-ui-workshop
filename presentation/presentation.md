---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
marp: true
header: 'Manuel Tarouca Martins'
---

![bg left:40% 80%](./images/angular.svg)

# **Angular Layout**

Responsive layout using Angular's API

---

# Agenda

1. Why use Angular Layout
2. Static API
3. Responsive API
4. Hands on
5. References
6. Q.A & further discussion

---

# Why use Angular Layout

- HTML markup for layout configuration
- Less CSS
- Supports support for breakpoints and custom breakpoints
- Overall framework consistency

---
<!-- _class: lead -->

![bg right:40% 80%](./images/angular.svg)

# **Static API**

---

# Static API [1]

> The static API by default targets the the desktop, developers should use e Responsive API to support alternate layout configurations.

#### API for DOM containers:

 HTML  | API |
|--------------------|-----------------------------|
|  fxLayout          | <direction> [wrap]          |
|  fxLayoutAlign     | <main-axis>  <cross-axis>   |
|  fxLayoutGap       | % \|  px \|  vw \|  vh      |

---

# Static API [1]

#### API for DOM elements:

| HTML         | Allowed values                                       |
|--------------|------------------------------------------------------|
| fxFlex       | "" \| px \| % \| vw \| vh \| <grow> <shrink> <basis> |
| fxFlexOrder  | int                                                  |
| fxFlexOffset | % \|  px \|  vw \|  vh                               |
| fxFlexAlign  | start \| baseline \| center \| end                   |
| fxFlexFill   |                                                      |

---

# Static API [1]

#### API for any element: 

| HTML API | Allowed values              |
|----------|-----------------------------|
|  fxHide  | TRUE \|  FALSE \|  0 \|  "" |
|  fxShow  | TRUE \|  FALSE \|  0 \|  "" |
|  ngClass | css class                   |
|  ngStyle | inline style                |
|  imgSrc  | img source                  |

---
<!-- _class: lead -->

![bg left:40% 80%](./images/angular.svg)

# **Responsive API**

---

# Responsive API [2]

| breakpoint | mediaQuery                                             |
|------------|--------------------------------------------------------|
| xs         | 'screen and (max-width: 599px)'                        |
| sm         | 'screen and (min-width: 600px) and (max-width: 959px)' |
| md         | 'screen and (min-width: 960px) and (max-width: 1279px)'|
| lg         | 'screen and (min-width: 1280px) and (max-width: 1919px)|
| xl         | 'screen and (min-width: 1920px) and (max-width: 5000px)|

---

# Responsive API [2]

#### Breakpoint aliases

| breakpoint | mediaQuery                                             |
|------------|--------------------------------------------------------|
| lt-sm      | 'screen and (max-width: 599px)'                        |
| lt-md      | 'screen and (max-width: 959px)'                        |
| lt-lg      | 'screen and (max-width: 1279px)'                       |
| lt-xl      | 'screen and (max-width: 1919px)'                       |

---

# Responsive API [2]

#### Breakpoint aliases

| breakpoint | mediaQuery                                             |
|------------|--------------------------------------------------------|
| gt-xs      | 'screen and (min-width: 600px)'                        |
| gt-sm      | 'screen and (min-width: 960px)'                        |
| gt-md      | 'screen and (min-width: 1280px)'                       |
| gt-lg      | 'screen and (min-width: 1920px)'                       |

---

# Responsive API [2]

> If we combine the breakpoint alias with the static API, we can easily support responsive breakpoints using a simple markup convention:

```html
<api>.<breakpoint alias>="<value>"
[<api>.<breakpoint alias>]="<expression>"
```

---
<!-- _class: lead -->

![bg right:40% 80%](./images/angular.svg)

# **Hands-on**

---

# Reference

[1]. https://github.com/angular/flex-layout/wiki/Declarative-API-Overview
[2]. https://github.com/angular/flex-layout/wiki/Responsive-API