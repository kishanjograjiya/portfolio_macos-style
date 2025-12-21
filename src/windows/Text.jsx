import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="max-h-[80vh] space-y-6 overflow-y-auto bg-white p-5">
        {image && (
          <figure className="w-full">
            <img
              src={image}
              alt={`Cover for ${name}`}
              className="h-auto w-full rounded"
              loading="lazy"
            />
          </figure>
        )}

        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-3 text-base leading-relaxed text-gray-800">
            {description.map((para, idx) => (
              <p key={`${name.replace(/\s+/g, "-")}-${idx}`}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
