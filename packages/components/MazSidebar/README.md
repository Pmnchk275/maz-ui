# MazSidebar

Generic component used to show a togglable sidebar (left or right) in the layout

## Props

<!-- @vuese:MazSidebar:props:start -->

| Name          | Description                                                           | Type      | Required | Default |
| ------------- | --------------------------------------------------------------------- | --------- | -------- | ------- |
| value         | Boolean to open or not the sidebar                                    | `Boolean` | `false`  | -       |
| id            | set id of sidebar                                                     | `String`  | `false`  | null    |
| width         | Size bar width                                                        | `Number`  | `false`  | 300     |
| loading       | Show loading layer                                                    | `Boolean` | `false`  | false   |
| noCloseBtn    | So that the user cannot close the sidebar                             | `Boolean` | `false`  | false   |
| noShadow      | Remove shadow UI                                                      | `Boolean` | `false`  | false   |
| absolute      | the sidebar goes over the content                                     | `Boolean` | `false`  | false   |
| right         | Must be activated if you want to integrate it on the right side       | `Boolean` | `false`  | false   |
| dark          | Dark mode                                                             | `Boolean` | `false`  | false   |
| layer         | Gray layer above the content, if you click on it, the side bar closes | `Boolean` | `false`  | false   |
| mini          | reduces the size of the sidebar width                                 | `Boolean` | `false`  | false   |
| miniWidth     | width size of sidebar with mini mode                                  | `Number`  | `false`  | 60      |
| expandOnHover | expand sidebar on hover (only with mini option)                       | `Boolean` | `false`  | false   |

<!-- @vuese:MazSidebar:props:end -->

## Events

<!-- @vuese:MazSidebar:events:start -->

| Event Name | Description                                              | Parameters |
| ---------- | -------------------------------------------------------- | ---------- |
| input      | return a `true` or `false` if the sidebar is open or not | Boolean    |

<!-- @vuese:MazSidebar:events:end -->

## Slots

<!-- @vuese:MazSidebar:slots:start -->

| Name           | Description | Default Slot Content |
| -------------- | ----------- | -------------------- |
| default        | -           | -                    |
| button-icon    | -           | -                    |
| content-loader | -           | -                    |

<!-- @vuese:MazSidebar:slots:end -->

## MixIns

<!-- @vuese:MazSidebar:mixIns:start -->

| MixIn    |
| -------- |
| uniqueId |

<!-- @vuese:MazSidebar:mixIns:end -->
