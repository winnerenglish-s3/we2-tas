<template>
  <div
    :class="sceen >= 1200 ? 'row ' : 'relative-position q-pa-md'"
    align="center"
    :style="sceen >= 1200 ? 'height:100vh ;min-width:1200px' : ''"
  >
    <div
      v-if="sceen >= 1200"
      :class="sceen >= 1200 ? 'col-6 relative-position' : ''"
      style="background: #a3d7cc"
    >
      <div
        style="width: 100%"
        :class="sceen >= 1200 ? ' absolute-center ' : ''"
      >
        <div
          style="width: 80%; color: #505050; height: 200px"
          class="text-left"
        >
          <b style="font-size: 24px">Teacher Assistant System</b>
          <br />
          <b style="font-size: 20px">ระบบผู้ช่วยครูอัจฉริยะ</b>
        </div>
        <img
          class="q-pa-md"
          style="max-width: 500px; width: 80%"
          src="../../public/login.png"
        />
      </div>
    </div>
    <div
      :class="sceen >= 1200 ? 'col-6 relative-position' : 'fixed-center '"
      :style="sceen >= 1200 ? '' : 'width: 100%; max-width: 360px'"
    >
      <div
        :class="sceen >= 1200 ? ' absolute-center ' : ''"
        style="width: 100%"
      >
        <div class="q-py-md">
          <img style="max-width: 120px" src="../../public/favicon.png" />
        </div>
        <div v-if="sceen < 1200" class="q-pb-lg" style="color: #505050">
          <b>Teacher Assistant System</b>
          <div>ระบบผู้ช่วยครูอัจฉริยะ</div>
        </div>
        <div class="q-py-sm q-px-md relative-position">
          <q-input
            autofocus
            dense
            borderless
            @keyup="isErrorUser = false"
            :class="isErrorUser ? 'box' : 'boxUnderline'"
            style="border-radius: 8px; max-width: 300px"
            :style="isErrorUser ? 'padding-right: 40px ' : ''"
            class="lightgraybg q-px-md"
            v-model="user"
            label="เบอร์โทรศัพท์"
          />
          <q-icon
            v-if="isErrorUser"
            class="absolute-right"
            size="20px"
            style="color: #e34554; margin-top: 16px; margin-right: 30px"
            name="fas fa-exclamation-circle"
          />
        </div>
        <div class="q-py-sm q-px-md relative-position">
          <q-input
            dense
            borderless
            :type="isPwd ? 'password' : 'text'"
            @keyup="isErrorPassword = false"
            :class="isErrorPassword ? 'box' : 'boxUnderline'"
            style="border-radius: 8px; max-width: 300px"
            :style="isErrorPassword ? 'padding-right: 40px' : ''"
            class="lightgraybg q-px-md"
            v-model="password"
            label="รหัสผ่าน"
          >
            <template v-slot:append>
              <q-icon
                v-if="password.length > 0"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-icon
            v-if="isErrorPassword"
            class="absolute-right"
            size="20px"
            style="color: #e34554; margin-top: 16px; margin-right: 30px"
            name="fas fa-exclamation-circle"
          />
        </div>
        <div class="q-py-sm q-px-md">
          <q-btn
            class="greenbg text-white"
            label="เข้าสู่ระบบ"
            style="
              max-width: 300px;
              width: 100%;
              height: 45px;
              border-radius: 8px;
            "
          />
        </div>
        <div class="q-py-lg" style="color: #666666">
          <div>ลืมรหัสผู้ใช้งานหรือรหัสผ่าน</div>
          <div>กรุณาติดต่อทีม Winner English</div>
          <div>Line ID : @Winner_QA</div>
          <div>โทร : 02-252-2489</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isPwd = ref(true);
    const isErrorUser = ref(false);
    const isErrorPassword = ref(false);
    const user = ref("");
    const password = ref("");
    password;
    return {
      isPwd,
      isErrorUser,
      isErrorPassword,
      user,
      password,
      sceen: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  border: 2px solid #e34554;
}
.boxUnderline {
  border: 2px solid #ebebeb;
}
</style>