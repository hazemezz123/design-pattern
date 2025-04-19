// Sample data for the Composite Pattern example
export const commentData = {
  id: "root",
  text: "Main comment",
  replies: [
    {
      id: "reply-1",
      text: "Reply to main comment",
      replies: [
        {
          id: "nested-1",
          text: "Nested reply level 2",
          replies: [
            {
              id: "nested-1-1",
              text: "Nested reply level 3",
            }
          ]
        },
      ],
    },
    {
      id: "reply-2",
      text: "Another reply",
    },
    {
      id: "reply-3",
      text: "Yet another reply",
      replies: [
        {
          id: "nested-3-1",
          text: "Nested reply to the third comment",
        }
      ]
    },
  ],
}; 