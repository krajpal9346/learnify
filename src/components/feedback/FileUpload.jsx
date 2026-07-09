import { Upload } from "lucide-react";

const FileUpload = () => {
    return (
        <div className="flex flex-col gap-3">
            <label className="text-lg font-bold">Add screenshots or attachments (optional)</label>

            <label htmlFor="feedback-file-upload" className="flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-purple-200 p-6 text-center transition-all duration-300 hover:border-[#6044da] hover:bg-purple-50 sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 sm:h-20 sm:w-20">
                    <Upload size={30} color="#6044da" aria-hidden="true" />
                </div>

                <p className="leading-7 text-gray-600">
                    Drag &amp; drop files here or{" "}
                    <span className="font-semibold text-[#6044da]">click to upload</span>
                </p>

                <p className="text-xs text-gray-500">PNG, JPG, GIF or PDF (Max 10 MB)</p>
            </label>

            <input id="feedback-file-upload" type="file" multiple className="hidden" />
        </div>
    );
};

export default FileUpload;