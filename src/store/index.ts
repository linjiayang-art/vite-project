import useUserStore from './modules/user'
//20221207 
import useTagsViewStore  from './modules/tagsView';
import useAppStore from './modules/app';
import usePermissionStore from './modules/permission';
import useSettingStore from './modules/settings';
const useStore = () => ({
    user: useUserStore(),
    //20221207
    tagsView:useTagsViewStore(),
    app: useAppStore(),
    setting: useSettingStore(),
    permission: usePermissionStore()

});
export default useStore