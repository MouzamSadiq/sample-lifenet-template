import { RefObject, useCallback, useRef, useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from '@mui/icons-material/Close';
import Webcam from "react-webcam";

function UploadOrCapturePhoto() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openImageViewer, setOpenImageViewer] = useState(false);
  const handleOpenImageViewer = () => setOpenImageViewer(true);
  const handleCloseImageViewer = () => setOpenImageViewer(false);
  const [currentImageViewerIndex, setCurrentImageViewerIndex] = useState(0);
  const webcamRef: RefObject<any> = useRef(null);
  const uploadRef = useRef(null);
  const [imgSrc, setImgSrc] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const byteString = atob(imageSrc.split(",")[1]);
    const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    const imageSrcBlob = new Blob([arrayBuffer], { type: mimeString });
    setImgSrc((value) => [{ img: imageSrcBlob }, ...value]);
    setOpen(false);
    setCurrentImageViewerIndex(0);
  }, [webcamRef]);

  const handleUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const blob = new Blob([reader.result as ArrayBuffer], {
          type: file.type,
        });
        setImgSrc((value) => [{ img: blob }, ...value]);
      };

      reader.readAsArrayBuffer(file);
    }
    setCurrentImageViewerIndex(0);
  };

  function removeImage(index: any) {
    const updatedImgSrc = [...imgSrc];
    updatedImgSrc.splice(index, 1);
    setImgSrc(updatedImgSrc);
    setCurrentImageViewerIndex(0);
    setCurrentIndex(0);
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imgSrc.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === imgSrc.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box
      sx={{
        width: "480px",
        height: "150px",
        borderRadius: "5px",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            pb: `${imgSrc.length === 0 ? "0" : "10px"}`,

            justifyContent: `${
              imgSrc.length === 0 ? "center" : "space-between"
            }`,
          }}
        >
          {/* Upload Button */}
          <Button
            variant={imgSrc.length === 0 ? "outlined" : "text"}
            component="label"
            sx={{
              display: "flex",
              gap: "0.5rem",
              textTransform: "none",
              pl: imgSrc.length !== 0 ? 2 : "",
              border: `${imgSrc.length === 0 ? "1px solid #D3D3D3" : ""}`,
            }}
          >
            <FileUploadOutlinedIcon style={{ color: "#00375d" }} />
            <span style={{ color: "black" }}>Upload Photo</span>
            <input
              ref={uploadRef}
              onChange={handleUpload}
              type="file"
              id="imageInput"
              accept="image/*"
              hidden
            />
          </Button>
          {imgSrc.length === 0 && <span style={{ color: "black" }}>OR</span>}
          {/* Camera Button */}
          <Button
            onClick={handleOpen}
            variant={imgSrc.length === 0 ? "outlined" : "text"}
            sx={{
              display: "flex",
              gap: "0.5rem",
              textTransform: "none",
              pr: imgSrc.length !== 0 ? 2 : "",
              border: `${imgSrc.length === 0 ? "1px solid #D3D3D3" : ""}`,
            }}
          >
            <CameraAltIcon style={{ color: "#00375d" }} />
            <span style={{ color: "black" }}>Take Photo</span>
          </Button>

          {/* Camera Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 2,
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  width: "700px",
                }}
              >
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    facingMode: { exact: "user" }, //change user to "environment" for rear camera . To Do
                  }}
                />

                <div>
                  <Button
                    onClick={capture}
                    variant="outlined"
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      textTransform: "none",
                    }}
                  >
                    <CameraAltIcon />
                    <span style={{ color: "black" }}>Capture image</span>
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </Box>

        {/* Image Preview */}
        {imgSrc.length !== 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            {imgSrc.length > 3 && (
              <KeyboardArrowLeftIcon
                onClick={goToPrevious}
                style={{ color: "#bfbfbf" }}
              />
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 80,
                  flexShrink: 0,
                  position: "relative",
                  border: "1px solid #D3D3D3",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {imgSrc.length !== 0 && (
                  <img
                    src={URL.createObjectURL(imgSrc[currentIndex].img)
                    }
                    alt={`Ima`}
                    style={{ width: "90%", padding: 5 }}
                    onClick={() => {setCurrentImageViewerIndex(currentIndex)
                    handleOpenImageViewer()}}
                  />
                )}
                <CancelIcon
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    color: "#00375d",
                  }}
                  onClick={() => removeImage(currentIndex)}
                />
              </Box>
              {imgSrc.length >= 2 && (
                <Box
                  sx={{
                    width: 100,
                    height: 80,
                    flexShrink: 0,
                    position: "relative",
                    border: "1px solid #D3D3D3",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={URL.createObjectURL(
                            imgSrc[
                              currentIndex === imgSrc.length - 1
                                ? 0
                                : currentIndex + 1
                            ].img
                          )
                    }
                    alt={`Ima`}
                    style={{ width: "90%", padding: 5 }}
                    onClick={() => {setCurrentImageViewerIndex(currentIndex === imgSrc.length - 1
                      ? 0
                      : currentIndex + 1)
                    handleOpenImageViewer()}}
                  />
                  <CancelIcon
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      color: "#00375d",
                    }}
                    onClick={() =>
                      removeImage(
                        currentIndex === imgSrc.length - 1
                          ? 0
                          : currentIndex + 1
                      )
                    }
                  />
                </Box>
              )}
              {imgSrc.length >= 3 && (
                <Box
                  style={{
                    width: 100,
                    height: 80,
                    flexShrink: 0,
                    position: "relative",
                    border: "1px solid #D3D3D3",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={URL.createObjectURL(
                            imgSrc[
                              currentIndex === imgSrc.length - 2
                                ? 0
                                : currentIndex === imgSrc.length - 1
                                ? 1
                                : currentIndex + 2
                            ].img
                          )
                          }
                    alt={`Ima`}
                    style={{ width: "90%", padding: 5 }}
                    onClick={() =>{
                      setCurrentImageViewerIndex(currentIndex === imgSrc.length - 2
                        ? 0
                        : currentIndex === imgSrc.length - 1
                        ? 1
                        : currentIndex + 2)
                      handleOpenImageViewer()
                    }}
                  />
                  <CancelIcon
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      color: "#00375d",
                    }}
                    onClick={() =>
                      removeImage(
                        currentIndex === imgSrc.length - 2
                          ? 1
                          : currentIndex === imgSrc.length - 1
                          ? 2
                          : currentIndex + 2
                      )
                    }
                  />
                </Box>
              )}
            </div>

            {imgSrc.length > 3 && (
              <KeyboardArrowRightIcon
                onClick={goToNext}
                style={{ color: "#bfbfbf" }}
              />
            )}
          </div>
        )}
      </Box>
      {/* Camera Modal */}
      <Modal
            open={openImageViewer}
            onClose={handleCloseImageViewer}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 2,
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  width: "700px",
                  padding:"10px"
                }}
              >
                <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}><div>Photo Preview</div><CloseIcon onClick={() => {setOpenImageViewer(false)}} /></div>
                {imgSrc.length !==0 &&<img
                    src={URL.createObjectURL(
                            imgSrc[currentImageViewerIndex].img
                          )
                          }
                    alt={`Ima`}
                    style={{ width: "90%", padding: 5 }}
                  />
                        }
                
              </div>
            </Box>
          </Modal>
      {/* <Button
        onClick={() => {
          console.log(imgSrc);
        }}
      >
        yo
      </Button> */}
    </Box>
  );
}

export default UploadOrCapturePhoto;
