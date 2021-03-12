<template>
  <q-page>
    <div align="center" :class="screen >= 1200 ? 'q-pa-md' : 'q-px-md'">
      <div
        :style="
          screen >= 1200
            ? '  width: 80%;min-width: 800px;border-radius: 10px;'
            : ''
        "
        style="color: #505050"
        :class="
          screen >= 1200 ? 'shadow-5 row' : 'text-left row justify-center'
        "
      >
        <div
          :style="
            screen >= 1200
              ? 'border-top-left-radius: 10px; border-bottom-left-radius: 10px'
              : 'max-width:500px;width:100%'
          "
          :class="screen >= 1200 ? 'col-6 q-pa-md text-left seagreenbg' : ''"
        >
          <div
            v-if="status != 'online'"
            class="f20"
            :class="screen >= 1200 ? ' q-pb-xl' : 'text-center q-pt-lg'"
          >
            ติดต่อทีมงาน
          </div>

          <div class="q-py-md row">
            <div class="q-pr-md q-pt-sm">
              <q-icon
                size="20px"
                style="color: #505050"
                name="fas fa-map-marker-alt"
              />
            </div>
            <div class="col">
              <div :class="screen >= 1200 ? 'f20' : 'f16'">ที่อยู่บริษัท</div>
              <div :class="screen >= 1200 ? 'f16' : ''">
                <div>1673/26 อาคารวิทยุคอมเพล็กซ์</div>
                <div>ถนนเพชรบุรีตัดใหม่ แขวงมักกะสัน</div>
                <div>เขตราชเทวี กรุงเทพฯ 10400</div>
              </div>
            </div>
          </div>
          <div class="q-py-md row">
            <div class="q-pr-md q-pt-sm">
              <q-icon
                size="20px"
                style="color: #505050"
                name="fas fa-phone-alt"
              />
            </div>
            <div>
              <div :class="screen >= 1200 ? 'f20' : 'f16'">โทรศัพท์</div>
              <div :class="screen >= 1200 ? 'f16' : ''">
                <div>02-252-2489</div>
              </div>
            </div>
          </div>
          <div class="q-py-md row">
            <div class="q-pr-md q-pt-sm">
              <q-icon size="20px" style="color: #505050" name="fab fa-line" />
            </div>
            <div>
              <div :class="screen >= 1200 ? 'f20' : 'f16'">โซเชียลมีเดีย</div>
              <div :class="screen >= 1200 ? 'f16' : ''">@Winner_QA</div>
            </div>
          </div>
          <div
            v-if="status != 'online'"
            :style="screen >= 1200 ? 'margin-top: -135px' : ''"
            style=""
            :class="screen >= 1200 ? 'text-right q-pr-md' : 'text-center'"
          >
            <img
              style="max-width: 180px; width: 100%"
              src="../../public/qr-code.png"
            />
            <div
              style="font-size: 10px"
              :class="screen >= 1200 ? 'q-mr-md q-pr-xs' : 'text-center'"
            >
              เพิ่มเพื่อนใน LINE ด้วยคิวอาร์โค้ด
            </div>
          </div>
          <div v-else class="text-center">
            <img
              class="q-pa-md"
              style="max-width: 330px; width: 100%"
              src="../../public/contact.png"
            />
          </div>
        </div>
        <div v-if="screen >= 1200" class="col-6 relative-position">
          <img
            class="q-pa-md absolute-center"
            style="max-width: 500px; width: 80%"
            src="../../public/contact.png"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const status = ref("5");
    return {
      status,
      screen: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>