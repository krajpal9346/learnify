import { useRef, useState } from "react";
import { Upload, FileText, Image, X, AlertCircle } from "lucide-react";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/gif", "application/pdf"];

const FileUpload = ({ files, onFilesChange }) => {
    const inputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState("");

    const validateFiles = (selectedFiles) => {
        const validFiles = [];

        for (const file of selectedFiles) {
            if (!ACCEPTED_TYPES.includes(file.type)) {
                setError("Only PNG, JPG, GIF and PDF files are allowed.");
                continue;
            }

            if (file.size > MAX_FILE_SIZE) {
                setError(`${file.name} exceeds the 10 MB file size limit.`);
                continue;
            }

            validFiles.push(file);
        }

        if (validFiles.length) {
            setError("");
        }

        return validFiles;
    };

    const addFiles = (selectedFiles) => {
        const validated = validateFiles(Array.from(selectedFiles));
        if (!validated.length) return;
        onFilesChange([...files, ...validated]);
    };

    const handleInputChange = (event) => {
        if (event.target.files.length) {
            addFiles(event.target.files);
        }

        event.target.value = "";
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);

        if (event.dataTransfer.files.length) {
            addFiles(event.dataTransfer.files);
        }
    };

    const removeFile = (index) => {
        onFilesChange(files.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col gap-3">
            <label className="text-lg font-bold">Add screenshots or attachments (optional)</label>

            <div onDragEnter={(e) => {
                e.preventDefault();
                setIsDragging(true);
            }}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300 sm:p-8 ${isDragging ? "border-[#6044da] bg-purple-50" : "border-purple-200 hover:border-[#6044da] hover:bg-purple-50"}`}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 sm:h-20 sm:w-20">
                    <Upload size={30} color="#6044da" aria-hidden="true" />
                </div>

                <p className="mt-5 leading-7 text-gray-600">
                    Drag &amp; drop files here or{" "}
                    <span className="font-semibold text-[#6044da]">click to upload</span>
                </p>

                <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF or PDF (Maximum 10 MB)</p>
                <input ref={inputRef} type="file" multiple accept=".png,.jpg,.jpeg,.gif,.pdf" className="hidden" onChange={handleInputChange} />
            </div>

            {error && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                </div>
            )}

            {files.length > 0 && (
                <div className="flex flex-col gap-3">
                    {files.map((file, index) => {
                        const isImage = file.type.startsWith("image");

                        return (
                            <div key={`${file.name}-${index}`} className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
                                        {isImage ? (<Image size={22} color="#6044da" />) : (<FileText size={22} color="#6044da" />)}
                                    </div>

                                    <div>
                                        <p className="max-w-55 truncate font-medium text-gray-800 sm:max-w-sm">{file.name}</p>
                                        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)}{" "}MB</p>
                                    </div>
                                </div>

                                <button type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFile(index);
                                    }}
                                    className="rounded-full p-2 transition-colors duration-300 hover:bg-red-100">
                                    <X size={18} className="text-red-500" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default FileUpload;