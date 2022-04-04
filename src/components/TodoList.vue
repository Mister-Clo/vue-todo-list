<template>
  <div>
      <tr>
          <td>{{title}}</td>
          <td>{{content}}</td>
          <td>{{isCompleted ? "✅": "❌"}}</td>
      </tr>
    
    
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    title: String,
    content: String,
    isCompleted: Boolean,
  }
};
</script>
