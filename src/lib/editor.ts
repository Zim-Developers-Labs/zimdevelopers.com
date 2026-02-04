import editors from '../../content/editors.json';

export type EditorType = {
  id: string;
  name: string;
  githubUrl: string;
  picture: string;
  bio: string;
};

export function findEditorById(id: string): EditorType | undefined {
  return (editors as EditorType[]).find((editor) => editor.id === id);
}
