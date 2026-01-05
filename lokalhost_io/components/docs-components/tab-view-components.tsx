import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Login3 from "../auth_services/login3"
import Login from "../auth_services/login"

function TabViewComponents() {
  return (
    <div className="flex flex-nowrap overflow-auto w-full flex-col gap-6">
      <Tabs defaultValue="Signup">
        <TabsList className="overflow-x-auto w-[100%] flex flex-nowrap items-start justify-start h-[60px]">
          <TabsTrigger value="Signup">{`<Signup />`}</TabsTrigger>
          <TabsTrigger value="Login">{`<Login />`}</TabsTrigger>
          <TabsTrigger value="Logout">{`<Logout />`}</TabsTrigger>
          <TabsTrigger value="Authenticate">{`<Authenticate OTP />`}</TabsTrigger>
          <TabsTrigger value="Regstration">{`<Regstration />`}</TabsTrigger>
          <TabsTrigger value="Change">{`<Change Password />`}</TabsTrigger>
          <TabsTrigger value="Reset">{`<Reset Password />`}</TabsTrigger>
          <TabsTrigger value="Social">{`<Social Logins />`}</TabsTrigger>
          <TabsTrigger value="Update">{`<Update Profile />`}</TabsTrigger>
          <TabsTrigger value="Profile">{`<Profile Button />`}</TabsTrigger>
          <TabsTrigger value="View">{`<View Profile />`}</TabsTrigger>

        </TabsList>
        <div className="relative">
        <TabsContent value="Signup">
          <Login3 />
        </TabsContent>
        <TabsContent value="Login">
          <Login />
    
        </TabsContent>
        <TabsContent value="Logout">
          <Login />
          
        </TabsContent>
        <TabsContent value="Authenticate">
          <Login />
          
        </TabsContent>
        <TabsContent value="Regstration">
          <Login />
          
        </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
export default TabViewComponents