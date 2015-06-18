using Autofac;

namespace WireStorm.Web.Api
{
    public class WebApiModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            // Register dependencies.
            //builder.Register(c => new Logger()).As<ILogger>().InstancePerRequest();
        }
    }


}