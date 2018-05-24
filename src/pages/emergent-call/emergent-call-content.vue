<template>
  <div id="call-content">
    <div class="container">
      <div class="content">
        <div class="title"><h3>国内第一个消防急救实验观察类真人秀节目</h3></div>
        <div>
          《紧急呼叫119》贵阳消防篇已于2017年12月28日暖心开拍，东方卫视知名主持人姜波，著名男歌手黄征，豪华制作<br>
          班底亲情加盟。让大家真正了解和掌握更多专业且正确的危险处置和自救的方法。目前，该节目计划按季播形<br>
          式来制作，每季十二期。医院、学校、KTV、洗浴中心、商场、商务楼等十二个人员密集的场所将作为拍摄地点。
        </div>
      </div>
      <div class="center">
        <div class="photo">拍摄植入模式已开启</div>
        <div class="photo-img">
        </div>
        <el-row>
          <div v-for="item in moduleList">
            <el-col :span="6" class="icon">
              <img :src="item.icon">
              <div class="mask">
                <a class="masktext" @click="dialogVisible = true">我要合作</a>
              </div>
              <div class="photo-text">{{item.name}}</div>
            </el-col>
          </div>
        </el-row>
        <el-dialog
          title="拍摄合作"
          :visible.sync="dialogVisible"
          width="896px">
          <el-form ref="form" :label-position="labelPosition" label-width="80px" :model="form" :rules="rules">
            <el-form-item label="联系人" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="合作方式" prop="job">
              <el-select v-model="form.job">
                <el-option label="场景合作" value="场景合作"></el-option>
                <el-option label="艺人合作" value="艺人合作"></el-option>
                <el-option label="消防专家合作" value="消防专家合作"></el-option>
                <el-option label="品牌赞助合作" value="品牌赞助合作"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
              <el-input type="textarea" rows="7" v-model="form.remark" placeholder="请描述需求概况"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="post_data('form')">立即合作</el-button>
             <div class="photo-tip">*我们将在三个工作日内，对你的信息进行反馈，请保持电话畅通</div>
          </span>
        </el-dialog>
      </div>
      <div class="volunteer">
        <div class="photo volunteer-title">志愿者招募</div>
        <div class="volunteer-img">
          <img src="./images/recruit-img.png" class="img-responsive center-block">
          <a @click="dialog = true"></a>
          <el-dialog
            title="报名信息"
            :visible.sync="dialog"
            width="896px">
            <el-form ref="personform" :label-position="labelPosition" label-width="80px" :model="personform"
                     :rules="personrules">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="personform.name"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="personform.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="职业" prop="job">
                <el-input v-model="personform.job"></el-input>
              </el-form-item>
              <el-form-item label="所在城市" prop="city">
                <el-input v-model="personform.city"></el-input>
              </el-form-item>
              <el-form-item label="电话" prop="phone">
                <el-input v-model="personform.phone"></el-input>
              </el-form-item>
              <el-form-item label="备注" prop="remark">
                <el-input type="textarea" :rows="7" v-model="personform.remark" placeholder="例如：周末双休，可参与拍摄"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="person_data('personform')">立即报名</el-button>
             <div class="photo-tip">*我们将在三个工作日内，对你的信息进行反馈，请保持电话畅通</div>
          </span>
          </el-dialog>
        </div>
      </div>
      <div class="tip">下载APP即可观看《紧急呼叫119》正片，
        更多花絮以及精彩内容尽在中消在线APP!
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'emergent-call-content',
    data: function () {
      var checkPhone = (rule, value, callback) => {
        if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(value))) {
          return callback(new Error('请填写正确的联系电话'))
        } else {
          callback()
        }
      }
      return {
        dialogVisible: false,
        dialog: false,
        labelPosition: 'right',
        form: {
          name: '',
          phone: '',
          job: '场景合作',
          remark: ''
        },
        personform: {
          name: '',
          sex: '',
          job: '',
          city: '',
          phone: '',
          remark: ''
        },
        moduleList: [
          {
            name: '贵州定制场景',
            icon: require('./images/list-img1.jpg')
          },
          {
            name: '合作场景：酒店',
            icon: require('./images/list-img2.jpg')
          },
          {
            name: '合作场景：商场',
            icon: require('./images/list-img3.jpg')
          },
          {
            name: '合作场景：电影院',
            icon: require('./images/list-img4.jpg')
          },
          {
            name: '艺人合作',
            icon: require('./images/list-img5.jpg')
          },
          {
            name: '消防专家合作',
            icon: require('./images/list-img6.jpg')
          },
          {
            name: '品牌植入合作',
            icon: require('./images/list-img7.jpg')
          },
          {
            name: '',
            icon: require('./images/list-img8.jpg')
          }
        ],
        rules: {
          name: [
            {required: true, message: '请输入联系人姓名', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入联系方式', trigger: 'blur'},
            {validator: checkPhone, trigger: 'blur'}
          ],
          job: [
            {required: true, message: '请至少选择一个合作场景', trigger: 'change'}
          ],
          remark: [
            {required: true, message: '请输入备注', trigger: 'blur'}
          ]
        },
        personrules: {
          name: [
            {required: true, message: '请输入联系人姓名', trigger: 'blur'}
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          job: [
            {required: true, message: '请输入职业', trigger: 'blur'}
          ],
          city: [
            {required: true, message: '请输入所在城市', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入联系方式', trigger: 'blur'},
            {validator: checkPhone, trigger: 'blur'}
          ],
          remark: [
            {required: true, message: '请输入备注', trigger: 'blur'}
          ]
        }
      }
    },
    mounted () {
    },
    methods: {
      resetForm (form) {
        this.$refs[form].resetFields()
      },
      post_data: function (form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.$api.post('/api', {method: 'querysave2', data: 'this.form'}, (data) => {
              alert(data.message)
            })
            this.resetForm(form)
            this.dialogVisible = false
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      person_data: function (form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.$api.post('/api', {method: 'querysave', data: 'this.personform'}, (data) => {
              alert(data.message)
            })
            this.resetForm(form)
            this.dialog = false
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  #call-content {
    textarea{
      resize:none
    }
    .content {
      margin-top: 53px;
      padding: 38px;
      line-height: 34px;
      /*text-indent: 36px;*/
      text-align: center;
      border: 1px solid #b7d6ff;
      font-size: 18px;
      .title {
        text-align: center;
        font-size: 20px;
        color: #ff0000;
        margin-bottom: 40px;
      }
    }
    .photo {
      background-image: url(./images/title-bg.png);
      margin: 22px auto 0;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      width: 387px;
      height: 45px;
      line-height: 45px;
    }
    .center {
      text-align: center;
      .photo-img {
        background-image: url(./images/shot-img-text.jpg);
        background-repeat: no-repeat;
        margin: 30px auto 28px;
        width: 686px;
        height: 31px;
      }
      .photo-text {
        height: 40px;
        line-height: 40px;
      }
      .icon {
        overflow: hidden;
        position: relative;
        &:hover {
          .mask {
            top: 0;
            transition: all 1s;
          }
        }
        .mask {
          position: absolute;
          top: -222px;
          margin-left: 28.5px;
          width: 233px;
          height: 222px;
          background-color: rgba(0, 0, 0, 0.4);
          .masktext {
            display: block;
            margin: 90px auto;
            font-size: 20px;
            color: #fff4a7;
            border: 1px solid #fff4a7;
            width: 106px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
      img {
        border: 1px solid #c9c9c9;
      }
    }
    .volunteer {
      .volunteer-title {
        margin: 42px auto 0;
      }
      .volunteer-img {
        position: relative;
        a {
          position: absolute;
          top: 319px;
          left: 508px;
          width: 110px;
          height: 40px;
          cursor: pointer;
        }
      }

    }
    .tip {
      text-align: center;
      color: #ff0000;
      font-size: 24px;
      margin: 30px 0;
    }
    .photo-tip {
      margin-top: 15px;
      font-size: 14px;
    }
    .el-dialog {
      border: 2px solid #c41335;
      border-radius: 3px;
    }
    .el-dialog__header {
      text-align: center;
      background-color: #c41335;
      color: #fff;
      .el-dialog__title {
        color: #fff;
        font-size: 14px;
      }
      .el-dialog__close {
        background-color: white;
        color: #c41335;
        width: 16px;
      }
    }
    .el-dialog__body {
      padding: 30px 180px 0px;
      .el-select {
        width: 100%;
      }
    }
    .el-dialog__footer {
      text-align: center;
    }
  }

</style>
