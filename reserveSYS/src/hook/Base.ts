import api from '@/http'
import UserDto from '@/class/UserDto'

export function api_login(userData : UserDto) {
    return api(userData).get('/test/hello');
}
