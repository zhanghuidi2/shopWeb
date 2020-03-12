const memberManage = () => import('@/pages/memberManage/index')
const memberList = () => import('@/pages/memberManage/memberList/index')
const memberTag = () => import('@/pages/memberManage/memberTag/index')
const member = {
  path: '/member-manage',
  name: 'memberManage',
  component: memberManage,
  children: [
    {
      path: '/member-manage/member-list',
      name: 'memberList',
      component: memberList
    },
    {
      path: '/member-manage/member-tag',
      name: 'memberTag',
      component: memberTag,
      meta: { cache: true }
    }
  ]
}
export default member
