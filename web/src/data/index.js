export default {
  User: [
    {
      user_id: 1,
      name: 'jihye',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 2,
      name: 'jiyoon',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 3,
      name: 'lily',
      created_at: '2018-09-11 11:42:11'
    },
  ],
  Content: [
    {
      content_id: 1,
      user_id: 1,
      title: '안녕하세요',
      context: '수강과목입니다',
      created_at: '2019-01-01 13:11:42',
      updated_at: null
    },
    {
      content_id: 2,
      user_id: 3,
      title: '수강과목2',
      context: '기업사회',
      created_at: '2019-01-02 13:11:42',
    },
    {
      content_id: 3,
      user_id: 2,
      title: '수강과목3',
      context: '^^',
      created_at: '2019-03-29 13:11:42',
      updated_at: null
    }
  ],
}
