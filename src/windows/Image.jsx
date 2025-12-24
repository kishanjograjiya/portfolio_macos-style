import { Plus, Share, SquarePen } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name}</p>
        <div className="flex items-end gap-3">
          <SquarePen className="icon" />
          <Plus className="icon" />
          <Share className="icon" />
        </div>
      </div>

      {imageUrl && (
        <figure className="preview">
          <img src={imageUrl} alt={`Image for ${name}`} />
        </figure>
      )}
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
