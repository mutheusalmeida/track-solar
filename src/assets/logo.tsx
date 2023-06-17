import * as React from 'react'
import Svg, { SvgProps, Ellipse, Path } from 'react-native-svg'

export const Logo = (props: SvgProps) => (
  <Svg width={146} height={60} fill="none" {...props}>
    <Ellipse cx={74.112} cy={10.851} fill="#DFFCC5" rx={10.175} ry={10.1} />
    <Path
      fill="#fff"
      d="M7.143 59.249c-1.261 0-2.259-.303-2.991-.91-.712-.625-1.069-1.635-1.069-3.03v-1.362c.02-.445.03-.96.03-1.546v-7.18H.948v-.667l.824-.122c.59-.1 1.089-.282 1.496-.545a4.198 4.198 0 0 0 1.16-1.09l1.984-2.728h.916l-.092 4.212h3.48v.94h-3.51v10.331c0 .727.152 1.273.457 1.636.326.364.723.546 1.19.546.408 0 .774-.091 1.1-.273a5.57 5.57 0 0 0 .977-.788l.397.455a4.17 4.17 0 0 1-1.618 1.575c-.692.364-1.547.546-2.565.546ZM12.345 58.825v-.576l.458-.152c.407-.1.682-.272.824-.515.163-.242.244-.565.244-.97v-8.877c-.02-.444-.101-.778-.244-1-.142-.242-.417-.404-.824-.484l-.458-.122v-.545l4.976-1.758.366.334.275 2.666v.212a7.163 7.163 0 0 1 1.16-1.575 6.45 6.45 0 0 1 1.526-1.182c.55-.303 1.1-.454 1.649-.454.773 0 1.353.202 1.74.605.386.404.58.92.58 1.546 0 .686-.194 1.212-.58 1.575-.387.344-.855.515-1.404.515-.814 0-1.517-.363-2.107-1.09l-.06-.061c-.204-.242-.438-.374-.703-.394-.244-.04-.488.081-.733.364a4.358 4.358 0 0 0-.58.727 5.815 5.815 0 0 0-.457.94v7.938c0 .383.08.707.244.97.163.242.437.413.824.514l.916.273v.576h-7.632ZM29.441 59.249c-1.16 0-2.147-.323-2.96-.97-.795-.666-1.191-1.616-1.191-2.848 0-.97.468-1.858 1.404-2.666.956-.828 2.452-1.434 4.487-1.818.346-.081.743-.152 1.19-.212.469-.081.927-.162 1.374-.243v-2.15c0-1.374-.173-2.324-.518-2.849-.346-.525-.896-.788-1.649-.788h-.092c-.468 0-.844.152-1.129.455-.265.283-.438.757-.519 1.424l-.092.394c-.06.808-.274 1.404-.64 1.787-.367.364-.825.546-1.374.546-.51 0-.936-.152-1.282-.455-.326-.323-.489-.737-.489-1.242 0-.828.285-1.525.855-2.09.57-.566 1.323-.99 2.259-1.273a10.827 10.827 0 0 1 3.083-.424c1.811 0 3.195.434 4.152 1.302.956.869 1.434 2.283 1.434 4.242v6.757c0 .869.418 1.303 1.252 1.303h.702l.305.333c-.366.465-.773.818-1.22 1.06-.448.263-1.059.395-1.832.395-.875 0-1.578-.203-2.107-.607-.508-.424-.844-.98-1.007-1.666-.651.687-1.292 1.242-1.923 1.666-.631.425-1.455.637-2.473.637Zm1.77-1.94c.408 0 .794-.09 1.16-.272.367-.182.825-.485 1.374-.909V51.28c-.529.08-1.068.182-1.617.303-.876.202-1.588.576-2.137 1.121-.53.546-.794 1.283-.794 2.212 0 .808.183 1.414.55 1.818.386.384.875.576 1.465.576ZM48.175 59.249c-1.384 0-2.636-.293-3.755-.879a6.698 6.698 0 0 1-2.656-2.606c-.631-1.151-.946-2.545-.946-4.18 0-1.637.356-3.03 1.068-4.182a7.101 7.101 0 0 1 2.839-2.636c1.2-.626 2.513-.94 3.938-.94 1.16 0 2.147.192 2.961.576.814.384 1.435.879 1.862 1.485.427.586.641 1.212.641 1.878 0 .566-.173 1-.519 1.303-.325.303-.753.455-1.282.455-.57 0-1.038-.202-1.404-.606-.346-.404-.55-.92-.61-1.546a8.652 8.652 0 0 1 0-1.03c.04-.282.04-.555 0-.818-.082-.343-.224-.575-.428-.697-.183-.12-.448-.181-.794-.181-1.282 0-2.269.515-2.96 1.545-.672 1.01-1.008 2.656-1.008 4.939 0 1.959.376 3.464 1.13 4.514.752 1.05 1.922 1.576 3.51 1.576.936 0 1.71-.172 2.32-.515.61-.364 1.17-.879 1.679-1.546l.488.364c-.509 1.212-1.292 2.141-2.35 2.788-1.038.626-2.28.939-3.724.939ZM55.155 58.825v-.576l.458-.152c.692-.202 1.038-.696 1.038-1.484V40.918c0-.404-.081-.707-.244-.91-.163-.221-.448-.383-.855-.484l-.397-.121v-.576l5.342-1.272.397.272-.122 4.273v14.513c0 .808.346 1.313 1.038 1.515l.427.12v.577h-7.082Zm11.173 0-5.525-7.575 5.403-4.97c.264-.221.417-.464.458-.726.04-.283-.133-.475-.52-.576l-.488-.121v-.576h4.762v.576l-.885.212c-.448.121-.814.293-1.099.515-.285.202-.62.475-1.007.818l-3.358 3.12 5.19 7.06c.325.425.62.758.885 1 .264.222.62.414 1.068.576l.305.09v.577h-5.189Z"
    />
    <Path
      fill="#DFFCC5"
      d="M84.552 59.249c-.977 0-1.862-.111-2.656-.334a10.022 10.022 0 0 1-2.228-.878v-3.575h.824l.916 1.727c.386.747.824 1.303 1.313 1.666.508.364 1.15.545 1.923.545.956 0 1.72-.202 2.29-.606.569-.424.854-.99.854-1.696 0-.647-.214-1.172-.641-1.576-.428-.404-1.19-.777-2.29-1.12l-1.343-.425c-1.2-.364-2.157-.91-2.87-1.636-.691-.748-1.037-1.677-1.037-2.788 0-.868.234-1.656.702-2.363.468-.727 1.15-1.303 2.045-1.727.896-.424 1.984-.636 3.267-.636a8.15 8.15 0 0 1 2.289.303 9.958 9.958 0 0 1 2.076.787l-.183 3.242h-.794l-.946-1.727c-.326-.646-.662-1.09-1.008-1.333-.325-.262-.834-.394-1.526-.394-.733 0-1.384.192-1.954.576-.55.364-.824.879-.824 1.545 0 .626.234 1.141.702 1.545.468.384 1.221.748 2.26 1.091l1.312.394c1.485.465 2.544 1.08 3.174 1.848.631.768.947 1.687.947 2.758 0 1.434-.58 2.595-1.74 3.484-1.14.869-2.758 1.303-4.854 1.303ZM100.169 59.249c-1.506 0-2.83-.313-3.969-.94a6.647 6.647 0 0 1-2.625-2.666c-.61-1.151-.916-2.525-.916-4.12 0-1.596.326-2.97.977-4.121.672-1.151 1.567-2.03 2.686-2.636 1.14-.626 2.422-.94 3.847-.94 1.424 0 2.696.314 3.815.94a6.597 6.597 0 0 1 2.687 2.636c.671 1.131 1.007 2.505 1.007 4.12 0 1.596-.315 2.98-.946 4.151a6.454 6.454 0 0 1-2.595 2.667c-1.119.606-2.442.909-3.968.909Zm0-.849c.732 0 1.322-.191 1.77-.575.468-.404.804-1.101 1.007-2.09.204-.99.306-2.374.306-4.152 0-1.798-.102-3.191-.306-4.181-.203-1.01-.539-1.707-1.007-2.09-.448-.405-1.038-.607-1.77-.607-.733 0-1.323.202-1.771.606-.448.384-.783 1.08-1.007 2.09-.204.99-.306 2.384-.306 4.182 0 1.778.102 3.161.306 4.151.224.99.56 1.687 1.007 2.09.448.385 1.038.576 1.771.576ZM108.994 58.825v-.576l.458-.121c.672-.222 1.007-.727 1.007-1.515v-2.06c.021-.707.031-1.404.031-2.091V40.948c0-.424-.071-.737-.214-.94-.142-.221-.417-.383-.824-.484l-.458-.121v-.576l5.342-1.272.397.272-.122 4.273v14.513c.02.404.102.737.244 1 .163.242.438.414.824.515l.428.12v.577h-7.113ZM121.617 59.249c-1.16 0-2.147-.323-2.961-.97-.794-.666-1.191-1.616-1.191-2.848 0-.97.469-1.858 1.405-2.666.956-.828 2.452-1.434 4.487-1.818.346-.081.743-.152 1.191-.212.468-.081.926-.162 1.373-.243v-2.15c0-1.374-.173-2.324-.519-2.849-.346-.525-.895-.788-1.648-.788h-.092c-.468 0-.844.152-1.129.455-.265.283-.438.757-.519 1.424l-.092.394c-.061.808-.274 1.404-.641 1.787-.366.364-.824.546-1.373.546-.509 0-.937-.152-1.283-.455-.325-.323-.488-.737-.488-1.242 0-.828.285-1.525.855-2.09.57-.566 1.323-.99 2.259-1.273a10.823 10.823 0 0 1 3.083-.424c1.811 0 3.195.434 4.152 1.302.956.869 1.434 2.283 1.434 4.242v6.757c0 .869.417 1.303 1.252 1.303h.702l.305.333c-.366.465-.773.818-1.221 1.06-.448.263-1.058.395-1.831.395-.876 0-1.578-.203-2.107-.607-.509-.424-.844-.98-1.007-1.666-.651.687-1.292 1.242-1.923 1.666-.631.425-1.455.637-2.473.637Zm1.771-1.94c.407 0 .793-.09 1.16-.272.366-.182.824-.485 1.373-.909V51.28c-.529.08-1.068.182-1.618.303-.875.202-1.587.576-2.136 1.121-.53.546-.794 1.283-.794 2.212 0 .808.183 1.414.549 1.818.387.384.875.576 1.466.576ZM132.782 58.825v-.576l.458-.152c.407-.1.682-.272.824-.515.163-.242.244-.565.244-.97v-8.877c-.02-.444-.102-.778-.244-1-.142-.242-.417-.404-.824-.484l-.458-.122v-.545l4.976-1.758.366.334.275 2.666v.212a7.156 7.156 0 0 1 1.16-1.575 6.457 6.457 0 0 1 1.526-1.182c.55-.303 1.099-.454 1.649-.454.773 0 1.353.202 1.74.605.386.404.58.92.58 1.546 0 .686-.194 1.212-.58 1.575-.387.344-.855.515-1.405.515-.814 0-1.516-.363-2.106-1.09l-.061-.061c-.204-.242-.438-.374-.702-.394-.244-.04-.489.081-.733.364a4.374 4.374 0 0 0-.58.727 5.84 5.84 0 0 0-.458.94v7.938c0 .383.082.707.245.97.162.242.437.413.824.514l.916.273v.576h-7.632Z"
    />
  </Svg>
)
