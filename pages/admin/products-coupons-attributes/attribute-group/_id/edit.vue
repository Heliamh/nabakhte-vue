<template>
  <div>
    <div
      class="d-flex justify-end"
    >
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
        @click="$router.go(-1)"
      >
        بازگشت >>
      </v-btn>
    </div>
    <v-expansion-panels focusable multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>اصلاح اطلاعات صفت خدمات دریافتی</v-expansion-panel-header>
        <v-expansion-panel-content>
          <attribute-category-information-correction />

          <div class="d-flex justify-end">
            <v-btn
              color="#b2dfdb"
              elevation="3"
              class="ml-5 mt-5 mb-5"
            >
              اعمال تغییرات
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>اصلاح اطلاعات مقدار صفت خدمات دریافتی</v-expansion-panel-header>
        <v-expansion-panel-content>
          <attribute-group-information-correction />

          <div class="d-flex justify-end">
            <v-btn
              color="#b2dfdb"
              elevation="3"
              class="ml-5 mt-5 mb-5"
            >
              اعمال تغییرات
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import AttributeCategoryInformationCorrection
  from '~/components/admin/informationCorrections/attributeCategory'
import AttributeGroupInformationCorrection
  from '~/components/admin/informationCorrections/attributeGroup'
export default {
  name: 'Edit',
  middleware: 'auth',
  components: { AttributeGroupInformationCorrection, AttributeCategoryInformationCorrection }
}
</script>
