-- two ways binding kiểu là tự động thay đổi trên thay đổi dưới thay đổi và ngược lại thôi
--lifecycle vòng đời của components
--mount là hàm để gắn cái vue object lên trang html
--hook là những hàm được gắn vào những thời điểm xác định của lifecycle
--Binding : các kiểu

- value binding: {{  }}
vd:
<template>
  <div id="app">
    <div>
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
   return {
    name: 'nam dep trai'
   }
  },
}

--property binding: 
    <template>
  <div id="app">
    // chúng ta bind cái thuộc tính id của h1 theo cái id ở bên dưới data()
    <h1 v-bind:id="id1">hello HelloWorld</h1>

  </div>
</template>

<script>


export default {
  
  data() {
   return {
    id1: 'abc'
   }
  },

}
</script>

--v-bind:[tên thuộc tính] =
viết tắt :[tên thuộc tính]

--style-class Binding
<template>

  <div id="app">
    // chúng ta bind cái thuộc tính id của h1 theo cái id ở bên dưới data()
    <h1 :class="{dachon: selected}">hello HelloWorld</h1>
    <button @click="selected = !selected">Click</button>
  </div>
</template>

<script>
export default {
  
  data() {
   return {
   selected: true,
   }
  },

}
</script>

<style>
.dachon {
  color:  red;
}
</style>

--Model
liên kết element với property (chỉ định một element vào một cái biến thôi chứ đéo có gì đâu)
vd
<template>

  <div id="app">
    thằng type liên kết với thằng return name và thằng v-model liên kết với thằng name
  <input type="text" v-model="name[1]">
  <input type="text" v-model="channels.name">
  </div>
</template>

<script>
export default {
  
  data() {
   return {
    name: [
        'Nugyen vjad',
        'Nugyen vja1d'
    ],
    channels: {
        name: {
            'lập trình tivi'
        }
    }
   }
  },

}
</script>

<style>
.dachon {
  color:  red;
}
</style>

--event handler
bắt sự kiện từ các element
v-on:[tên sự kiện]= 'kkdkd'
viết tắt :@click instead of writing v-on:click

<template>
  <div id="app">
  <input type="text" v-model="channels.name">
  <button v-on:click="channels.name = 'ABC' ">click</button>
  </div>
</template>

<script>


export default {
  
  data() {
   return {
    channels: {
      name: 'vip'
    }
   }
  },

}
</script>

--prevent default event
hủy event của element mặc định đi

--ref là lấy được cái element html vd như thẻ input h1 h2
<template>

  <div id="app">
  <input type="text" ref="channel">
  lấy = this.$ref.channel = element html hiện tại 
  thay vì var a=document.getElementById('channel');
  </div>
</template>

--
conditional rendering (hiển thị theo điều kiện)
vd v-show: ẩn hiện element theo điều kiện
v-hide :ngược v-show
v-if: ẩn hiện (nếu mà true nó vẫn hiện như bình thường còn nếu là false thì mất đi luôn phần tử)
v-el:

--list rendering
v-for: lặp ra hét danh sách

--methods: hàm của vue object
vd
<template>

  <div id="app">
    <input type="text" v-model="newTask">
    <button @click="addTask()">Theme</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done">
      <span :class="{done: task.done}">{{ task.content }}</span>

    </div>

  </div>
</template>

<script>


export default {
  
  data() {
   return {
    newTask: '',
    tasks: [],
     }
  },

  methods: {
    addTask: function() {
      this.tasks.push({content: this.newTask, done: false})
    }
  }


  --watch theo dõi sự thay đổi của data
vd để xem trang này có thay đổi gì không thoi nha con giời



--hooks
mounted(đơn giản nhất) là hàm chạy đầu tiên thường dùng để gọi api


--props dữ liệu được lấy ra từ component cha đến component con 
dùng mảng mang tên là các props

<template>
  <div id="app">
    <input type="text" v-model="newTask">
    <button @click="addTask()">Theme</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done">
      <span :class="{done: task.done}">{{ task.content }}</span>

    </div>
  </div>
</template>

<script>


export default {
  
  data() {
   return {
    newTask: '',
    tasks: [],
     }
  },
  mounted: {

  },
  methods: {
    props: [

    ],
    addTask: function() {
      this.tasks.push({content: this.newTask, done: false})
    }
  },

  watch: {
    newTask: function() {
      console.log('new task changed')
    }
  }

}
</script>

<style>
.dachon {
  color:  red;
}
</style>
