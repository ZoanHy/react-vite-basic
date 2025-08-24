import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFileAPI,
  updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDrawer = (props) => {
  const [api, contextHolder] = notification.useNotification();

  const { isDrawerOpen, setIsDrawerOpen, dataView, loadUser } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  console.log(dataView);

  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    // console.log(event.target.files[0]);

    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    console.log(">>> check file", selectedFile);

    const resUpload = await handleUploadFileAPI(selectedFile, "avatar");
    // console.log(">>> check resUpload: ", resUpload);

    // step 1: upload file
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;
      const resUpdateAvatar = await updateUserAvatarAPI(
        dataView._id,
        newAvatar,
        dataView.fullName,
        dataView.phone
      );

      if (resUpdateAvatar.data) {
        api.success({
          message: "Update Successful",
          description: "Your avatar has been updated.",
        });

        setSelectedFile(null);
        setPreview(null);
        setIsDrawerOpen(false);
        await loadUser();
      } else {
        api.error({
          message: "Update Failed",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      api.error({
        message: "Upload Failed",
        description: JSON.stringify(resUpload.message),
      });
      return;
    }

    // step 2: update user
  };

  return (
    <Drawer
      width={"40vw"}
      title="Basic Drawer"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => setIsDrawerOpen(false)}
      open={isDrawerOpen}
    >
      {contextHolder}
      {dataView ? (
        <div className="user-details" style={{ padding: "20px" }}>
          <div
            className="detail-row"
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="label"
              style={{
                fontWeight: "bold",
                width: "100px",
                fontSize: "16px",
              }}
            >
              ID:
            </span>
            <span className="value" style={{ fontSize: "15px" }}>
              {dataView._id}
            </span>
          </div>
          <div
            className="detail-row"
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="label"
              style={{
                fontWeight: "bold",
                width: "100px",
                fontSize: "16px",
              }}
            >
              Fullname:
            </span>
            <span className="value" style={{ fontSize: "15px" }}>
              {dataView.fullName}
            </span>
          </div>
          <div
            className="detail-row"
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="label"
              style={{
                fontWeight: "bold",
                width: "100px",
                fontSize: "16px",
              }}
            >
              Email:
            </span>
            <span className="value" style={{ fontSize: "15px" }}>
              {dataView.email}
            </span>
          </div>
          <div
            className="detail-row"
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className="label"
              style={{
                fontWeight: "bold",
                width: "100px",
                fontSize: "16px",
              }}
            >
              Phone:
            </span>
            <span className="value" style={{ fontSize: "15px" }}>
              {dataView.phone}
            </span>
          </div>

          <div
            style={{ height: "250px", width: "250px", marginBottom: "20px" }}
          >
            <span
              className="label"
              style={{
                fontWeight: "bold",
                width: "100px",
                fontSize: "16px",
              }}
            >
              Avatar:
            </span>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataView.avatar
              }`}
              alt=""
            />
          </div>

          <div>
            <label
              htmlFor="btnUpload"
              style={{
                cursor: "pointer",
                color: "white",
                padding: "8px 16px",
                backgroundColor: "orange",
                borderRadius: "999px",
              }}
            >
              Upload Avatar
            </label>
            <input
              type="file"
              hidden
              id="btnUpload"
              onChange={handleOnChangeFile}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            {selectedFile && (
              <>
                <div>
                  <img
                    style={{
                      width: "250px",
                      height: "250px",
                      backgroundSize: "cover",
                    }}
                    src={preview}
                  />
                </div>

                <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                  Save
                </Button>
              </>
            )}
          </div>
        </div>
      ) : (
        <p
          className="no-data"
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#999",
          }}
        >
          Không có dữ liệu
        </p>
      )}
    </Drawer>
  );
};
export default ViewUserDrawer;
