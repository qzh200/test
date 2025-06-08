<template>
  <div class="register-container">
    <el-form :model="form" :rules="rules" ref="registerForm" @submit.prevent="handleRegister">
      <h2>用户注册</h2>
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" prefix-icon="User" />
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱" prefix-icon="Message" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码" prefix-icon="Lock" show-password />
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input v-model="form.confirmPassword" type="password" placeholder="请确认密码" prefix-icon="Lock" show-password />
      </el-form-item>
      <el-button type="primary" native-type="submit" class="submit-btn">立即注册</el-button>
      <div class="link-text">
        已有账号？<el-link type="primary" @click="$router.push('/login')">立即登录</el-link>
      </div>
    </el-form>

    <el-dialog v-model="errorVisible" title="错误提示" width="400px">
      <div class="error-content">
        <el-icon class="error-icon">
          <Warning />
        </el-icon>
        <ul class="error-list">
          <li v-for="(error, index) in errorMessage.split('<br>')" :key="index">{{ error }}</li>
        </ul>
      </div>
      <template #footer>
        <el-button @click="errorVisible = false">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Warning } from '@element-plus/icons-vue'
import axios from 'axios'

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const validatePassConfirm = (rule, value, callback) => {
  if (value !== form.value.password) {
    callback(new Error('两次输入密码不一致'))
  } else {
    callback()
  }
}

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 16, message: '用户名长度在3到16个字符', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入有效的邮箱地址',
      trigger: ['blur', 'change'],
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,20}/.test(value)) {
          callback(new Error('建议密码包含字母、数字和特殊符号(!@#$%^&*)组合'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: validatePassConfirm, trigger: 'blur' }
  ]
}

const errorVisible = ref(false)
const errorMessage = ref('')
const router = useRouter()
const registerForm = ref(null)

const handleRegister = async () => {
  registerForm.value.validate(async (valid, fields) => {
    if (!valid) {
      const errors = []
      for (const field in fields) {
        const label = {
          username: '用户名',
          email: '邮箱',
          password: '密码',
          confirmPassword: '确认密码'
        }[field]
        fields[field].forEach(err => errors.push(`${label}：${err.message}`))
      }
      errorMessage.value = '注册失败：<br>' + errors.join('<br>')
      errorVisible.value = true
      return
    }

    // 实际注册逻辑
    try {
      const response = await axios.post('http://localhost:5000/register', form.value, {
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.data.success) {
        ElMessage.success('注册成功')
        router.push('/login')
      } else {
        throw new Error(response.data.message || '注册失败')
      }
    }
    catch (error) {
      errorMessage.value = (error.response?.data?.message || error.message || '网络连接异常').replace(/\n/g, '<br>')
      errorVisible.value = true
    }
  })
}
</script>

<style scoped>
@import '../styles/error.css';
</style>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.el-form {
  width: 400px;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
}

.link-text {
  margin-top: 15px;
  text-align: center;
  color: #606266;
}
</style>

<style scoped>
.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.error-icon {
  font-size: 48px;
  color: #e6a23c;
  margin-bottom: 20px;
  animation: iconBounce 0.5s ease;
}

.error-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  color: #f56c6c;
}

.error-list li {
  padding: 8px 0;
  line-height: 1.6;
  border-bottom: 1px solid #f0f0f0;
}

.error-list li:last-child {
  border-bottom: none;
}

@keyframes iconBounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>