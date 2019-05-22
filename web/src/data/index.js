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
  Comment: [
    {
      comment_id: 1,
      user_id: 1,
      content_id: 3,
      context: '안녕하세요~',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    },
    {
      comment_id: 2,
      user_id: 3,
      content_id: 3,
      context: '새로운 수강과목',
      created_at: '2019-03-29 16:11:11',
      updated_at: null
    },
    {
      comment_id: 3,
      user_id: 2,
      content_id: 1,
      context: '싫어요',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    }
  ],
  SubComment: [
    {
      subcomment_id: 1,
      comment_id: 3,
      user_id: 1,
      context: '좋아요',
      created_at: '2019-03-29 16:22:11',
      updated_at: null
    }
  ]
}
