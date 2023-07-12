// 接口类型,有些字段可能是没有用的在此不做记录

// 监测因子协议类型 05:2005 17:2017
export type FactorProtocolType = '05' | '17'
//  监测因子类型 31:废气 32:废水
export type FactorTypeType = 31 | 32
// 任务类别编码 patrol：巡检维护，accessory：配件更换，fault：故障检修，waste：废液回收，calibration：校准，check：校验，sample：标液更换，other:自建类别
export type TaskCodeType = 'patrol' | 'accessory' | 'fault' | 'waste' | 'calibration' | 'check' | 'sample' | 'other'
// 任务是否开启 0 关闭 1 开启
export type TaskOpenType = 0 | 1
// 任务完成状态 0 未完成 1 已逾期 2 已完成
export type TaskStatusType = 0 | 1 | 2
// 用户信息类型
export interface UserInfoType {
  deleted: null | boolean
  disabled: null | boolean
  id: string
  initial: null | boolean
  name: string
  phone: string | null
  unionId: string | null
}

// 用户登录响应
export interface LoginType {
  // 1 管理端 2 运维端 3 管理员账号切换至运维端
  loginType: 1 | 2 | 3
  menus: MenuType[]
  permissions: string[]
  token: string
  user: UserInfoType
  companyName: string
}
// 分页接口类型
export interface RecordsType<T> {
  records: T[]
  pages: string
  size: string
  total: string
}

// 菜单响应
export interface MenuType {
  children?: MenuType[]
  clientType: number
  id?: string
  name: string
  parentId: null | string
  permission: string
  sort: number
  // 1 菜单 2 目录 3 按钮
  type: 1 | 2 | 3
  url: string
  hasChildren?: boolean
}

// 监测因子类型
export interface FactorType {
  code: string
  id: string
  name: string
  protocolType: FactorProtocolType
  type: number
  unit: string
}

// 监测因子分页类型
export type FactorListType = RecordsType<FactorType>

// 运维公司类型
export interface EnterpriseType {
  address: string
  id: string
  linkman: string
  name: string
  phone: string
  remark: string
}

// 运维公司分页类型
export type EnterpriseListType = RecordsType<EnterpriseType>

// 账号类型
export interface AccountType {
  companyId?: string
  companyName?: string
  id: string
  name: string
  phone: string
  password?: string
}

// 账号分页类型
export type AccountTypeListType = RecordsType<AccountType>

// 编辑账号类型
export interface EditAccountType {
  id?: string
  companyId?: string
  phone: string
  password?: string
  name: string
}

// 后台用户类型
export interface UserType {
  id: string
  initial: boolean
  manageStations: null | string[]
  name: string
  phone: string
  roles: string
}

// 后台用户分页类型
export type UserListType = RecordsType<UserType>

// 后台增加用户
export interface EditUserType {
  id?: string
  phone: string
  password?: string
  name: string
  roleIds: string[]
  stations: string[]
}

// 后台角色类型
export interface RoleType {
  id: string
  initial: boolean
  name: string
  users: string | string[]
}

// 后台角色分页类型
export type RoleListType = RecordsType<RoleType>

// 客户企业类型
export interface CustomerEnterPriseType {
  address: string
  id: string
  linkman: string
  name: string
  phone: string
}

// 客户企业分页类型
export type CustomerEnterPriseListType = RecordsType<CustomerEnterPriseType>

// 站点类型
export interface StationType {
  enterpriseId: string
  enterpriseName: string
  id: string
  latitude: string
  longitude: string
  mn: string
  name: string
  operators: string
  operatorNames: string
  type: FactorTypeType
}

// 站点分页类型
export type StationListType = RecordsType<StationType>

// 站点因子类型
export interface StationFactorType {
  factorCode: string
  factorName: string
  id: string
  stationId: string
  type: FactorTypeType
  unit: string
}

// 站点因子分页类型
export type StationFactorListType = RecordsType<StationFactorType>

// 站点设备类型
export interface DeviceType {
  id: string
  stationId: string
  name: string
  model: string
  manufacturer: string
  factoryDate: string
}

// 站点设备分页类型
export type DeviceListType = RecordsType<DeviceType>

// 可供切换的运维商账号
export interface SwitchAccountType {
  name: string
  // 切换用户类型（1：管理端，2：运维端）
  type: 1 | 2
  userId: string
}

// 任务类别
export interface TaskTypeType {
  code: TaskCodeType
  id: string
  initial: boolean
  name: string
}

// 任务类别分页
export type TaskTypeListType = RecordsType<TaskTypeType>

// 周期任务
export interface CycleTaskType {
  enable: boolean
  id: string
  name: string
  taskInterval: number
  taskType: string
  taskTypeName: string
}

export interface CycleTaskDetailType extends CycleTaskType {
  stationList: StationType[]
}

export type CycleTaskListType = RecordsType<CycleTaskType>

// 运维任务类型
export interface TaskType {
  deadline: string
  enterpriseId: string
  enterpriseName: string
  finishTime: string
  id: string
  name: string
  operators: string
  operatorNames: string
  remark: string
  stationId: string
  stationName: string
  status: TaskStatusType
  taskConfigId: string
  type: string
  typeCode: TaskCodeType
  typeName: string
}

export type TaskListType = RecordsType<TaskType>

// 图片上传
export interface TaskFileType {
  id: string
  name: string
  newName: string
  path: string
  taskId: string
  url: string
}

// 任务详情
export interface TaskDetailType {
  enterpriseName: string
  finishTime: string
  operatorNames: string
  remark: string
  stationId: string
  stationName: string
  status: TaskStatusType
  taskFileList: TaskFileType[]
  taskId: string
}

// 配件更换详情
export interface AccessoryTaskType extends TaskDetailType {
  taskAccessoryList: {
    accessoryName: string
    deviceId: string
    deviceName: string
    id: string
    number: number
    reason: string
    taskId: string
  }[]
}

// 校准详情
export interface CalibrationTaskType extends TaskDetailType {
  taskCalibrationList: {
    deviceId: string
    deviceName: string
    id: string
    normal: 0 | 1
    taskId: string
  }[]
}

// 校验详情
export interface CheckTaskType extends TaskDetailType {
  taskCheckList: {
    deviceId: string
    deviceName: string
    id: string
    normal: 0 | 1
    taskId: string
  }[]
}

// 故障检修详情
export interface FaultTaskType extends TaskDetailType {
  deviceId: string
  // 厂家
  deviceManufacturer: string
  // 型号
  deviceModel: string
  // 名称
  deviceName: string
  remark: string
}

// 自建任务详情
export interface OtherTaskType extends TaskDetailType {
  remark: string
}

// 巡检维护详情
export interface PatrolTaskType extends TaskDetailType {
  // 0 正常 1 异常
  // 辅助设备状态
  auxiliaryCheck: 0 | 1
  auxiliaryCheckRemark: string
  // 数据采集传输系统状态
  dtEquipmentCheck: 0 | 1
  dtEquipmentCheckRemark: string
  // 水污染源在线监测仪器状态
  equipmentCheck: 0 | 1
  equipmentCheckRemark: string
  // 维护预备状态
  prepareCheck: 0 | 1
  prepareCheckRemark: string
  remark: string
  // 采样系统状态
  sampleCheck: 0 | 1
  sampleCheckRemark: string
}

// 标样试剂更换详情
export interface SampleTaskType extends TaskDetailType {
  // name名称 value值
  reagentList: { id: string; name: string; taskId: string; value: number }[]
  sampleList: { id: string; name: string; taskId: string; value: number }[]
}

// 废液回收详情
export interface WasteTaskType extends TaskDetailType {
  // amount数量
  taskWasteList: { id: string; taskId: string; deviceId: string; deviceName: string; amount: number }[]
}

// 运维报告
export interface ReportDataType {
  accessoryTask: number
  calibrationPassRate: number
  checkPassRate: number
  completedTask: number
  constantTimes: number
  consumableAccessory: number
  faultAccessory: number
  faultList: any[]
  faultTask: number
  offlineTimes: number
  overProofTimes: number
  patrolList: any[]
  patrolTask: number
  sampleTask: number
  waste: number
  zeroTimes: number
  stationName: string
}

// 站点状态统计
export interface StationStatusType {
  // 异常站点数量
  abnormalCount: number
  // 站点总数
  allCount: number
  // 正常站点数量
  normalCount: number
  // 离线站点数量
  offlineCount: number
  // 超标站点数量
  overProofCount: number
}

// 公司站点数
export interface StationTreeType {
  enterpriseId: string
  enterpriseName: string
  stationCount: number
  stationList?: { stationId: string; stationName: string }[]
}
