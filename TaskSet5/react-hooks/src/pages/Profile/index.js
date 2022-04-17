import "./Profile.scss";

const Profile = ({setName,setSurname}) => {

    
    return(
        <div className={"profile"}>
            <div className={"profile-category"}>
                {/*Для ...*/}
                <div className={"profile-category-item"}>General</div>
                <div className={"profile-category-item"}>Confidentialty</div>
                <div className={"profile-category-item"}>Private</div>
                <div className={"profile-category-item"}>Language</div>
                {/*...макета*/}
            </div>
            <div className={"profile-setting"}>
                <h1>Change your personal information</h1>
                <div className={"profile-setting-data"}>
                    <div className={"profile-setting-data-item"}>
                        <div>
                            <input className={"profile-setting-data-item-input"} name={"name"} onChange={(el)=>setName(el.target.value)} placeholder={"Write new name..."} required/>
                        </div>
                    </div>
                    <div className={"profile-setting-data-item"}>
                        <div>
                            <input className={"profile-setting-data-item-input"} name={"surname"} onChange={(el)=>setSurname(el.target.value)} placeholder={"Write new surname..."} required/>
                        </div>
                    </div>
                    <div className={"profile-setting-data-item"}>
                        <input className={"profile-setting-data-item-btn"} type={"submit"} onClick={()=>alert(`Information successfully changed`)} value={"Update"}/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Profile;